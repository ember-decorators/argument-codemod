const { getParser } = require('codemod-cli').jscodeshift;
const { getOptions } = require('codemod-cli');

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const options = getOptions(); // eslint-disable-line
  const input = j(file.source);
  const props = [];
  const filename = file.path.substring(file.path.lastIndexOf('/') + 1);
  const output = j.expressionStatement(
    j.assignmentExpression(
      '=',
      j.memberExpression(j.identifier('module'), j.identifier('exports'), false),
      j.objectExpression([
        j.property('init', j.literal('componentFileName'), j.literal(filename)),
        j.property('init', j.literal('arguments'), j.objectExpression(props)),
      ])
    )
  );

  function parseDecoratorArgs(args) {
    if (!args.length) {
      return [];
    }

    return args.map((arg) => {
      if (arg.type === 'StringLiteral') {
        return j.literal(`"${arg.value}"`);
      } else if (arg.type === 'Identifier') {
        return j.literal(arg.name);
      } else if (arg.type === 'ObjectExpression') {
        const props = arg.properties.map((prop) => {
          const key = prop.key.type === 'StringLiteral' ? prop.key.value : prop.key.name;
          return j.property('init', j.literal(key), parseDecoratorArgs([prop.value])[0]);
        });

        return j.objectExpression(props);
      } else if (arg.type === 'CallExpression') {
        // for each argument passed to the fun, parse out its value by calling this func
        return j.objectExpression([
          j.property('init', j.literal('__name'), j.literal(arg.callee.name)),
          j.property(
            'init',
            j.literal('__args'),
            j.arrayExpression(parseDecoratorArgs(arg.arguments))
          ),
        ]);
      }

      return j.literal('unknown');
    });
  }

  // Find all the class properties that have decorators
  input
    .find(j.ClassProperty)
    .filter((classProperty) => Boolean(classProperty.value.decorators.length))
    .forEach((classProperty) => {
      let propValue = [];

      // loop through all the decorators applied to this classProperty and parse
      // out the type and args
      classProperty.value.decorators.forEach((decorator) => {
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
            type = `"${decoratorArg.value}"`;
          } else if (decoratorArg.type === 'Identifier') {
            type = decoratorArg.name;
          } else if (decoratorArg.type === 'CallExpression') {
            type = decoratorArg.callee.name;
            args = parseDecoratorArgs(decoratorArg.arguments);
          }

          propValue.push(j.property('init', j.literal('__name'), j.literal(type)));
          if (args.length) {
            propValue.push(j.property('init', j.literal('__args'), j.arrayExpression(args)));
          }
        }
      });

      props.push(
        j.property('init', j.literal(classProperty.value.key.name), j.objectExpression(propValue))
      );
    });

  return j(output).toSource();
};

module.exports.type = 'js';
