module.exports = {
  "componentFileName": "type-decorators-with-helpers.js",

  "arguments": {
    "optionalArgument": {
      "type": "CallExpression",
      "value": "optional",
      "args": [
        {
          "type": "Identifier",
          "value": "Date"
        },
      ]
    },

    "arrayArgument": {
      "type": "CallExpression",
      "value": "arrayOf",
      "args": [
        {
          "type": "StringLiteral",
          "value": "StringLiteral"
        },
      ]
    },

    "oneArgument": {
      "type": "CallExpression",
      "value": "oneOf",
      "args": [
        {
          "type": "StringLiteral",
          "value": "red"
        },
        {
          "type": "StringLiteral",
          "value": "blue"
        },
        {
          "type": "StringLiteral",
          "value": "yellow"
        }
      ]
    },

    "unionArgument": {
      "type": "CallExpression",
      "value": "unionOf",
      "args": [
        {
          "type": "StringLiteral",
          "value": "number"
        },
        {
          "type": "StringLiteral",
          "value": "StringLiteral"
        },
      ]
    },

    "shapeArgument": {
      "type": "CallExpression",
      "value": "shapeOf",
      "args": [
        {
          "type": "ObjectExpression",
          "value": {
            "id": {
              "type": "StringLiteral",
              "value": "StringLiteral"
            },
          }
        }
      ]
    },

    "nestedArgument": {
      "type": "CallExpression",
      "value": "unionOf",
      "args": [
        {
          "type": "StringLiteral",
          "value": "StringLiteral"
        },
        {
          "type": "CallExpression",
          "value": "shapeOf",
          "args": [
            {
              "id": {
                "type": "CallExpression",
                "value": "optional",
                "args": [
                  {
                    "type": "StringLiteral",
                    "value": "StringLiteral"
                  }
                ]
              }
            }
          ]
        }
      ]
    }

    "nestedArgument": {
      validators: [
        ["union-of", [
          'string',
          'number',
          ['instance-of', 'this.__Date'] // <-- stringify the exposed property
          ['shape-of', {
            id: ["optional", "StringLiteral"]
          }]
        ]]
      ],
    }
  }
};