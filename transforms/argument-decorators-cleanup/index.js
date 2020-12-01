const { getParser } = require('codemod-cli').jscodeshift;
const { getOptions } = require('codemod-cli');

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const options = getOptions(); // eslint-disable-line
  const input = j(file.source);
  // Remove decorators
  input.find(j.ClassBody).forEach((classBody) => {
    if (classBody.value.body && classBody.value.body.length) {
      // These are all of the class properties/methods in the class
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
        .forEach((argumentProperty) => {
          // now we're down to arguments with "type" and/or "argument" decorators (but they could have more)
          const filteredDecorators = argumentProperty.decorators.filter((decorator) => {
            const name =
              decorator.expression.type === 'CallExpression'
                ? decorator.expression.callee.name
                : decorator.expression.name;

            return name !== 'type' && name !== 'argument';
          });
          argumentProperty.decorators = filteredDecorators;
        });
    }
  });

  // Remove imports
  input.find(j.ImportDeclaration).forEach((path) => {
    if (path.value.source.value.includes('@ember-decorators/argument')) {
      path.prune();
    }
  });

  return input.toSource();
};

module.exports.type = 'js';
