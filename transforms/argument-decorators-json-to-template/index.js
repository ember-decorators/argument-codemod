const fs = require('fs');

module.exports = function ({ source, path }, { parse, visit }) {
  console.log( parse, visit );
  // const ast = parse(source);
  // const filename = path.substring(path.lastIndexOf('/') + 1).slice(0, -4);
  // const argumentsJSON = fs.readFileSync('argument-decorators-to-json.json', {
  //   encoding: 'utf8',
  // });

  // const argumentsData = JSON.parse(argumentsJSON);
  // const data = argumentsData[filename] || {};

  // const buildArgTypeHelper = function buildArgTypeHelper(key, val) {
  //   return b.mustache(
  //     b.path('arg-type'),
  //     [b.path(`@${key}`), getPositionalArgs(val)],
  //     b.hash([b.pair('path', b.string(key))])
  //   );
  // };

  // const getPositionalArgs = function getPositionalArgs({ type, value, args = [] }) {
  //   if (type === 'StringLiteral') {
  //     return b.string(value);
  //   } else if (type === 'CallExpression') {
  //     if (args && args.length) {
  //       return b.sexpr(
  //         b.path(value),
  //         args.map((arg) => getPositionalArgs)
  //       );
  //     }

  //     return b.sexpr(b.path(value));
  //   }
  // };

  // const argTypes = Object.entries(data.argumentProperties).reduce((_hash, [key, val]) => {
  //   if (val.type === 'StringLiteral' || val.type === 'CallExpression') {
  //     _hash.push(buildArgTypeHelper(key, val));
  //     _hash.push(b.path('\n'));
  //   } else if (val.type === 'Identifier') {
  //     // TODO: return string interpretation of what to add once type is exported from class
  //     //_hash.push(b.comment(`You need to export ${key}`));
  //   }

  //   return _hash;
  // }, []);

  // return {
  //   Template(node) {
  //     node.body = argTypes.concat([b.path('\n'), ...node.body]);
  //   },
  // };
};

module.exports.type = 'hbs';
