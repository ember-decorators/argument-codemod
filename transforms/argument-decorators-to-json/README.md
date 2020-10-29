# argument-decorators-to-json


## Usage

```
npx @ember-decorators/argument-codemod argument-decorators-to-json path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js argument-decorators-to-json path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [argument-decorators-with-helpers](#argument-decorators-with-helpers)
* [argument-decorators-with-primitives](#argument-decorators-with-primitives)
* [type-decorators-with-helpers](#type-decorators-with-helpers)
* [type-decorators-with-primitives](#type-decorators-with-primitives)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="argument-decorators-with-helpers">**argument-decorators-with-helpers**</a>

**Input** (<small>[argument-decorators-with-helpers.input.js](transforms/argument-decorators-to-json/__testfixtures__/argument-decorators-with-helpers.input.js)</small>):
```js
class Foo extends Component {
  @argument(optional(Date))
  optionalArgument;

  @argument(arrayOf('string'))
  arrayArgument;

  @argument(oneOf('red', 'blue', 'yellow'))
  oneArgument;

  @argument(shapeOf({ id: 'string' }))
  shapeArgument;

  @argument(unionOf('number', 'string'))
  unionArgument;

  @argument(unionOf('string', shapeOf({ id: optional('string') })))
  nestedArgument;
}

```

**Output** (<small>[argument-decorators-with-helpers.output.json](transforms/argument-decorators-to-json/__testfixtures__/argument-decorators-with-helpers.output.json)</small>):
```json
{
  "componentClassName": "Foo",
  "componentFileName": "type-decorator-helpers",
  "arguments": {
    "optionalArgument": {
      "type": "optional",
      "args": [
        "Date"
      ]
    },
    "arrayArgument": {
      "type": "arrayOf",
      "args": [
        "\"string\""
      ]
    },
    "oneArgument": {
      "type": "oneOf",
      "args": [
        "\"red\"",
        "\"blue\"",
        "\"yellow\""
      ]
    },
    "shapeArgument": {
      "type": "shapeOf",
      "args": [
        {
          "id": {
            "type": "\"string\""
          }
        }
      ]
    },
    "unionArgument": {
      "type": "unionOf",
      "args": [
        {
          "type": "\"number\""
        },
        {
          "type": "\"string\""
        }
      ]
    },
    "nestedArgument": {
      "type": "unionOf",
      "args": [
        {
          "type": "\"string\""
        },
        {
          "type": "shapeOf",
          "args": [
            {
              "id": {
                "type": "optional",
                "args": ["\"string\""]
              }
            }
          ]
        }
      ]
    }
  }
}
```
---
<a id="argument-decorators-with-primitives">**argument-decorators-with-primitives**</a>

**Input** (<small>[argument-decorators-with-primitives.input.js](transforms/argument-decorators-to-json/__testfixtures__/argument-decorators-with-primitives.input.js)</small>):
```js
import {
  Action,
  ClassicAction,
  Element,
  Node
} from '@ember-decorators/argument/types';

class MyClass {}

class Foo extends Component {
  @argument('any')
  anyArgument;

  @argument('boolean')
  booleanArgument;

  @argument('null')
  nullArgument;

  @argument('number')
  numberArgument;

  @argument('object')
  objectArgument;

  @argument('string')
  stringArgument;

  @argument('symbol')
  symbolArgument;

  @argument('undefined')
  undefinedArgument;

  @argument(Action)
  actionArgument;

  @argument(ClassicAction)
  classicActionArgument;

  @argument(Element)
  elementArgument;

  @argument(Node)
  nodeArgument;

  @argument(MyClass)
  classArgument;
}

```

**Output** (<small>[argument-decorators-with-primitives.output.json](transforms/argument-decorators-to-json/__testfixtures__/argument-decorators-with-primitives.output.json)</small>):
```json
{
  "componentClassName": "Foo",
  "componentFileName": "type-decorator-primitives",
  "arguments": {
    "anyArgument": {
      "type": "\"any\""
    },
    "booleanArgument": {
      "type": "\"boolean\""
    },
    "nullArgument": {
      "type": "\"null\""
    },
    "numberArgument": {
      "type": "\"number\""
    },
    "objectArgument": {
      "type": "\"object\""
    },
    "stringArgument": {
      "type": "\"string\""
    },
    "symbolArgument": {
      "type": "\"symbol\""
    },
    "undefinedArgument": {
      "type": "\"undefined\""
    },
    "actionArgument": {
      "type": "Action"
    },
    "classicActionArgument": {
      "type": "ClassicAction"
    },
    "elementArgument": {
      "type": "Element"
    },
    "nodeArgument": {
      "type": "Node"
    },
    "classArgument": {
      "type": "MyClass"
    }
  }
}
```
---
<a id="type-decorators-with-helpers">**type-decorators-with-helpers**</a>

**Input** (<small>[type-decorators-with-helpers.input.js](transforms/argument-decorators-to-json/__testfixtures__/type-decorators-with-helpers.input.js)</small>):
```js
class Foo extends Component {
  @argument
  @type(optional(Date))
  optionalArgument;

  @argument
  @type(arrayOf('string'))
  arrayArgument;

  @argument
  @type(oneOf('red', 'blue', 'yellow'))
  oneArgument;

  @argument
  @type(shapeOf({ id: 'string' }))
  shapeArgument;

  @argument
  @type(unionOf('number', 'string'))
  unionArgument;

  @argument
  @type(unionOf('string', shapeOf({ id: optional('string') })))
  nestedArgument;
}

```

**Output** (<small>[type-decorators-with-helpers.output.json](transforms/argument-decorators-to-json/__testfixtures__/type-decorators-with-helpers.output.json)</small>):
```json
{
  "componentClassName": "Foo",
  "componentFileName": "type-decorator-helpers-legacy",
  "arguments": {
    "optionalType": {
      "type": "optional",
      "args": "Date"
    },
    "arrayType": {
      "type": "arrayOf",
      "args": "\"string\""
    },
    "oneType": {
      "type": "oneOf",
      "args": [
        "\"red\"",
        "\"blue\"",
        "\"yellow\""
      ]
    },
    "shapeType": {
      "type": "shapeOf",
      "args": {
        "id": {
          "type": "\"string\""
        }
      }
    },
    "unionType": {
      "type": {
        "unionOf": [
          { "type": "\"number\"" },
          { "type": "\"string\"" }
        ]
      }
    },
    "nestedType": {
      "type": "unionOf",
      "args": [
        { "type": "\"string\"" },
        {
          "type": "shapeOf",
          "args": {
            "id": {
              "type": "optional",
              "args": "\"string\""
            }
          }
        }
      ]
    }
  }
}
```
---
<a id="type-decorators-with-primitives">**type-decorators-with-primitives**</a>

**Input** (<small>[type-decorators-with-primitives.input.js](transforms/argument-decorators-to-json/__testfixtures__/type-decorators-with-primitives.input.js)</small>):
```js
import {
  Action,
  ClassicAction,
  Element,
  Node
} from '@ember-decorators/argument/types';

class MyClass {}

class Foo extends Component {
  @argument
  @type('any')
  anyArgument;

  @argument
  @type('boolean')
  booleanArgument;

  @argument
  @type('null')
  nullArgument;

  @argument
  @type('number')
  numberArgument;

  @argument
  @type('object')
  objectArgument;

  @argument
  @type('string')
  stringArgument;

  @argument
  @type('symbol')
  symbolArgument;

  @argument
  @type('undefined')
  undefinedArgument;

  @argument
  @type(Action)
  actionArgument;

  @argument
  @type(ClassicAction)
  classicActionArgument;

  @argument
  @type(Element)
  elementArgument;

  @argument
  @type(Node)
  nodeArgument;

  @argument
  @type(MyClass)
  classArgument;
}
```

**Output** (<small>[type-decorators-with-primitives.output.json](transforms/argument-decorators-to-json/__testfixtures__/type-decorators-with-primitives.output.json)</small>):
```json
{
  "componentClassName": "Foo",
  "componentFileName": "type-decorator-primitives-legacy",
  "arguments": {
    "anyArgument": {
      "type": "\"any\""
    },
    "booleanArgument": {
      "type": "\"boolean\""
    },
    "nullArgument": {
      "type": "\"null\""
    },
    "numberArgument": {
      "type": "\"number\""
    },
    "objectArgument": {
      "type": "\"object\""
    },
    "stringArgument": {
      "type": "\"string\""
    },
    "symbolArgument": {
      "type": "\"symbol\""
    },
    "undefinedArgument": {
      "type": "\"undefined\""
    },
    "actionArgument": {
      "type": "Action"
    },
    "classicActionArgument": {
      "type": "ClassicAction"
    },
    "elementArgument": {
      "type": "Element"
    },
    "nodeArgument": {
      "type": "Node"
    },
    "classArgument": {
      "type": "MyClass"
    }
  }
}

```
<!--FIXTURES_CONTENT_END-->