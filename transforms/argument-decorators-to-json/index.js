const fs = require('fs');
const { getParser } = require('codemod-cli').jscodeshift;
const { getOptions } = require('codemod-cli');
const output = {};

const transformer = function transformer(file, api) {
  const j = getParser(api);
  const options = getOptions(); // eslint-disable-line
  const input = j(file.source);
  const filename = file.path.substring(file.path.lastIndexOf('/') + 1).slice(0, -3);
  const argumentProperties = {};

  // Add entry to json output for this file
  if (!Object.prototype.hasOwnProperty.call(output, filename)) {
    output[filename] = {
      path: file.path,
      argumentProperties,
    };
  }

  // Add an entry to the `argumentProperties` object for this class property whose value
  // is a map of the args passed to its type/argument decorators
  function parseClassProperty(classProperty) {
    let propValue = {};

    // loop through all the decorators applied to this classProperty and parse
    // out the type and args
    classProperty.decorators.forEach((decorator) => {
      if (
        decorator.expression.type === 'CallExpression' &&
        (decorator.expression.callee.name === 'type' ||
          decorator.expression.callee.name === 'argument')
      ) {
        const decoratorArg = decorator.expression.arguments[0];
        let value = '';
        let args = [];

        // Get type and args for this class property
        if (decoratorArg.type === 'StringLiteral') {
          value = decoratorArg.value;
        } else if (decoratorArg.type === 'Identifier') {
          value = decoratorArg.name;
        } else if (decoratorArg.type === 'CallExpression') {
          value = decoratorArg.callee.name;
          args = parseDecoratorArgs(decoratorArg.arguments);
        }

        propValue.type = decoratorArg.type;
        propValue.value = value;
        if (args.length) {
          propValue.args = args;
        }
      }
    });

    // generate key for argument and set value to result from above
    if (!Object.prototype.hasOwnProperty.call(argumentProperties, classProperty.key.name)) {
      argumentProperties[classProperty.key.name] = propValue;
    }
  }

  // Parse decorator args into a usable structure.
  function parseDecoratorArgs(args = []) {
    if (!args.length) {
      return [];
    }

    return args.map((arg) => {
      if (arg.type === 'StringLiteral') {
        return {
          type: arg.type,
          value: arg.value,
        };
      } else if (arg.type === 'Identifier') {
        return {
          type: arg.type,
          value: arg.name,
        };
      } else if (arg.type === 'ObjectExpression') {
        const value = {};
        arg.properties.forEach((prop) => {
          const key = prop.key.type === 'StringLiteral' ? prop.key.value : prop.key.name;
          value[key] = parseDecoratorArgs([prop.value])[0];
        });

        return {
          type: arg.type,
          value,
        };
      } else if (arg.type === 'CallExpression') {
        // for each argument passed to the fun, parse out its value by calling this func
        return {
          type: arg.type,
          value: arg.callee.name,
          args: parseDecoratorArgs(arg.arguments),
        };
      }

      return {
        type: 'unknown',
      };
    });
  }

  // Find all class properties and
  input.find(j.ClassBody).forEach((classBody) => {
    if (classBody.value.body && classBody.value.body.length) {
      classBody.value.body
        .filter((classProperty) => {
          const decorators = classProperty.decorators || [];
          const hasArgumentDecorator = decorators.some((decorator) => {
            return (
              decorator.expression.type === 'CallExpression' &&
              (decorator.expression.callee.name === 'type' ||
                decorator.expression.callee.name === 'argument')
            );
          });

          return Boolean(decorators.length) && hasArgumentDecorator;
        })
        .forEach(parseClassProperty);
    }
  });

  // Have to write each time this is transform is ran cause I can't access the state elsewhere
  fs.writeFileSync('argument-decorators-to-json.json', JSON.stringify(output, null, 2), {
    encoding: 'utf8',
  });

  // Return the unaltered input since we're really just trying to generate a json file as a side-effect
  return input.toSource();
};

module.exports = transformer;
module.exports.type = 'js';
