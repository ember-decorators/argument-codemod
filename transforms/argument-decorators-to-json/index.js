const { getParser } = require('codemod-cli').jscodeshift;
const { getOptions } = require('codemod-cli');
const camelCase = require('camelcase');

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const options = getOptions(); // eslint-disable-line
  const input = j(file.source);
  const props = [];
  const filename = camelCase(file.path.substring(file.path.lastIndexOf('/') + 1).slice(0, -3));
  const output = j.variableDeclaration('const', [
    j.variableDeclarator(
      j.identifier(filename),
      j.objectExpression([
        j.property('init', j.literal('filePath'), j.literal(file.path)),
        j.property('init', j.literal('arguments'), j.objectExpression(props)),
      ])
    ),
  ]);

  function parseClassProperty(classProperty) {
    let propValue = [];

    // loop through all the decorators applied to this classProperty and parse
    // out the type and args
    classProperty.decorators.forEach((decorator) => {
      if (
        decorator.expression.type === 'CallExpression' &&
        (decorator.expression.callee.name === 'type' ||
          decorator.expression.callee.name === 'argument')
      ) {
        const decoratorArg = decorator.expression.arguments[0];
        let type = '';
        let args = [];

        // Get type and args for this class property
        if (decoratorArg.type === 'StringLiteral') {
          type = decoratorArg.value;
        } else if (decoratorArg.type === 'Identifier') {
          type = decoratorArg.name;
        } else if (decoratorArg.type === 'CallExpression') {
          type = decoratorArg.callee.name;
          args = parseDecoratorArgs(decoratorArg.arguments);
        }

        propValue.push(j.property('init', j.literal('type'), j.literal(decoratorArg.type)));
        propValue.push(j.property('init', j.literal('value'), j.literal(type)));
        if (args.length) {
          propValue.push(j.property('init', j.literal('args'), j.arrayExpression(args)));
        }
      }
    });

    if (propValue.length) {
      props.push(
        j.property('init', j.literal(classProperty.key.name), j.objectExpression(propValue))
      );
    }
  }

  // Parse decorator args and return AST representations
  function parseDecoratorArgs(args = []) {
    if (!args.length) {
      return [];
    }

    return args.map((arg) => {
      if (arg.type === 'StringLiteral') {
        return j.objectExpression([
          j.property('init', j.literal('type'), j.literal(arg.type)),
          j.property('init', j.literal('value'), j.literal(arg.value)),
        ]);
      } else if (arg.type === 'Identifier') {
        return j.objectExpression([
          j.property('init', j.literal('type'), j.literal(arg.type)),
          j.property('init', j.literal('value'), j.literal(arg.name)),
        ]);
      } else if (arg.type === 'ObjectExpression') {
        const props = arg.properties.map((prop) => {
          const key = prop.key.type === 'StringLiteral' ? prop.key.value : prop.key.name;
          return j.property('init', j.literal(key), parseDecoratorArgs([prop.value])[0]);
        });

        return j.objectExpression([
          j.property('init', j.literal('type'), j.literal(arg.type)),
          j.property('init', j.literal('value'), j.objectExpression(props)),
        ]);
      } else if (arg.type === 'CallExpression') {
        // for each argument passed to the fun, parse out its value by calling this func
        return j.objectExpression([
          j.property('init', j.literal('type'), j.literal(arg.type)),
          j.property('init', j.literal('value'), j.literal(arg.callee.name)),
          j.property(
            'init',
            j.literal('args'),
            j.arrayExpression(parseDecoratorArgs(arg.arguments))
          ),
        ]);
      }

      return j.literal('unknown');
    });
  }

  input.find(j.ClassBody).forEach((classBody) => {
    if (classBody.value.body && classBody.value.body.length) {
      classBody.value.body
        .filter((classProperty) => {
          return classProperty.decorators && Boolean(classProperty.decorators.length);
        })
        .forEach(parseClassProperty);
    }
  });

  return j(output).toSource({ tabWidth: 2 });
};

module.exports.type = 'js';
