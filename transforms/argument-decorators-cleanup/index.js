const { getParser } = require('codemod-cli').jscodeshift;
const { getOptions } = require('codemod-cli');

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const options = getOptions(); // eslint-disable-line

  return j(file.source)
    .find(j.ClassProperty)
    .filter((prop) => Boolean(prop.value.decorators.length))
    .forEach((path) => {
      path.value.decorators = [];
    })
    .toSource();
};

module.exports.type = 'js';
