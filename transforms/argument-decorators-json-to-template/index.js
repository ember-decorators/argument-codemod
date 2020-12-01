const fs = require('fs');

module.exports = function ({ path, source }, { parse, visit }) {
  const ast = parse(source);
  const filename = path.substring(path.lastIndexOf('/') + 1).slice(0, -4);
  const argumentsJSON = fs.readFileSync('argument-decorators-to-json.json', {
    encoding: 'utf8',
  });
  const argumentsData = JSON.parse(argumentsJSON);
  const data = argumentsData[filename] ? argumentsData[filename].argumentProperties : {};

  return visit(ast, (env) => {
    let { builders: b } = env.syntax;

    // Build out the positional arguments for the arg-type helper
    const parseArgTypes = function parseArgTypes({ type, value, args, isOptional } = {}) {
      const templateArgs = [];

      function addTemplateArg(block) {
        if (isOptional && value !== 'optional') {
          templateArgs.push(b.sexpr(b.path('optional'), [block]));
        } else {
          templateArgs.push(block);
        }
      }

      if (type === 'Identifier') {
        switch (value) {
          case 'Function':
          case 'ClosureAction':
            addTemplateArg(b.string('function'));
            break;
          case 'Promise':
            addTemplateArg(b.string('object'));
            break;
          default:
            // TODO: have this output (instance-of this.__TheType) and expose `__TheType` in the class
            addTemplateArg(b.string('__UNKNOWN_TYPE__'));
        }
      }

      if (type === 'StringLiteral') {
        addTemplateArg(b.string(value));
      }

      if (type === 'CallExpression') {
        if (value === 'shapeOf') {
          const shape = args[0].value;
          const pairs = Object.entries(shape).map(([key, val]) => {
            return b.pair(key, parseArgTypes(val)[0]);
          });

          addTemplateArg(b.sexpr(b.path(value), [], b.hash(pairs)));
        } else {
          // for each item in args, clall this func and set to posArgs
          const posArgs = args
            .map((arg) => {
              return parseArgTypes(arg);
            })
            .flat();

          addTemplateArg(b.sexpr(b.path(value), posArgs));
        }
      }

      return templateArgs;
    };

    // Create the arg-type helper for a given argument property
    const buildArgTypeHelper = function buildArgTypeHelper(key, val) {
      const args = parseArgTypes(val);
      return b.mustache(
        b.path('arg-type'),
        [b.path(`@${key}`), ...args],
        b.hash([b.pair('path', b.string(key))])
      );
    };

    // Get each arg-type helper, add a newline after it, and return the collection of all helpers
    const argTypes = Object.entries(data).reduce((_hash, [key, val]) => {
      _hash.push(buildArgTypeHelper(key, val));
      _hash.push(b.path('\n'));
      return _hash;
    }, []);

    return {
      Template(node) {
        // If there are any arg-types at the top of the file we can assume this has already been run
        if (
          !(node.body[0].type === 'MustacheStatement' && node.body[0].path.original === 'arg-type')
        ) {
          node.body = argTypes.concat([b.path('\n'), ...node.body]);
        }
      },
    };
  });
};

module.exports.type = 'hbs';
