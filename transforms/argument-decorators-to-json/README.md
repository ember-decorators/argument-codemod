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
* [type-decorator-helpers-legacy](#type-decorator-helpers-legacy)
* [type-decorator-helpers](#type-decorator-helpers)
* [type-decorator-primitives-legacy](#type-decorator-primitives-legacy)
* [type-decorator-primitives-with-defaults-legacy](#type-decorator-primitives-with-defaults-legacy)
* [type-decorator-primitives-with-defaults](#type-decorator-primitives-with-defaults)
* [type-decorator-primitives](#type-decorator-primitives)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="type-decorator-helpers-legacy">**type-decorator-helpers-legacy**</a>

**Input** (<small>[type-decorator-helpers-legacy.input.js](transforms/argument-decorators-to-json/__testfixtures__/type-decorator-helpers-legacy.input.js)</small>):
```js
class Foo extends Component {
  @argument
  @type(optional(Date))
  optionalType;

  @argument
  @type(arrayOf('string'))
  arrayType;

  @argument
  @type(oneOf('red', 'blue', 'yellow'))
  oneType;

  @argument
  @type(shapeOf({ id: 'string' }))
  shapeType;

  @argument
  @type(unionOf('number', 'string'))
  unionType;

  @argument
  @type(unionOf('string', shapeOf({ id: optional('string') })))
  nestedType;
}

```

**Output** (<small>[type-decorator-helpers-legacy.output.json](transforms/argument-decorators-to-json/__testfixtures__/type-decorator-helpers-legacy.output.json)</small>):
```json
{
  "componentClassName": "Foo",
  "arguments": {
    "optionalType": {
      "type": {
        "optional": "Date"
      },
      "defaultValue": "undefined"
    },
    "arrayType": {
      "type": {
        "arrayOf": "string"
      },
      "defaultValue": "undefined"
    },
    "oneType": {
      "type": {
        "oneOf": ["red", "blue", "yellow"]
      },
      "defaultValue": "undefined"
    },
    "shapeType": {
      "type": {
        "shapeOf": {
          "id": "string"
        }
      },
      "defaultValue": "undefined"
    },
    "unionType": {
      "type": {
        "unionOf": ["number", "string"]
      },
      "defaultValue": "undefined"
    },
    "nestedType": {
      "type": {
        "unionOf": [
          "string",
          {
            "shapeOf": {
              "id": {
                "optional": "string"
              }
            }
          }
        ]
      },
      "defaultValue": "undefined"
    }
  }
}

```
---
<a id="type-decorator-helpers">**type-decorator-helpers**</a>

**Input** (<small>[type-decorator-helpers.input.js](transforms/argument-decorators-to-json/__testfixtures__/type-decorator-helpers.input.js)</small>):
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

**Output** (<small>[type-decorator-helpers.output.json](transforms/argument-decorators-to-json/__testfixtures__/type-decorator-helpers.output.json)</small>):
```json
{
  "componentClassName": "Foo",
  "arguments": {
    "optionalArgument": {
      "type": {
        "optional": "Date"
      },
      "defaultValue": "undefined"
    },
    "arrayArgument": {
      "type": {
        "arrayOf": "string"
      },
      "defaultValue": "undefined"
    },
    "oneArgument": {
      "type": {
        "oneOf": ["red", "blue", "yellow"]
      },
      "defaultValue": "undefined"
    },
    "shapeArgument": {
      "type": {
        "shapeOf": {
          "id": "string"
        }
      },
      "defaultValue": "undefined"
    },
    "unionArgument": {
      "type": {
        "unionOf": ["number", "string"]
      },
      "defaultValue": "undefined"
    },
    "nestedArgument": {
      "type": {
        "unionOf": [
          "string",
          {
            "shapeOf": {
              "id": {
                "optional": "string"
              }
            }
          }
        ]
      },
      "defaultValue": "undefined"
    }
  }
}

```
---
<a id="type-decorator-primitives-legacy">**type-decorator-primitives-legacy**</a>

**Input** (<small>[type-decorator-primitives-legacy.input.js](transforms/argument-decorators-to-json/__testfixtures__/type-decorator-primitives-legacy.input.js)</small>):
```js
class Foo extends Component {
  @argument
  @type('any')
  anyType;

  @argument
  @type('boolean')
  booleanType;

  @argument
  @type('null')
  nullType;

  @argument
  @type('number')
  numberType;

  @argument
  @type('object')
  objectType;

  @argument
  @type('string')
  stringType;

  @argument
  @type('symbol')
  symbolType;

  @argument
  @type('undefined')
  undefinedType;
}
```

**Output** (<small>[type-decorator-primitives-legacy.output.json](transforms/argument-decorators-to-json/__testfixtures__/type-decorator-primitives-legacy.output.json)</small>):
```json
{
  "componentClassName": "Foo",
  "arguments": {
    "anyType": {
      "type": "any",
      "defaultValue": "undefined"
    },
    "booleanType": {
      "type": "boolean",
      "defaultValue": "undefined"
    },
    "nullType": {
      "type": "null",
      "defaultValue": "undefined"
    },
    "numberType": {
      "type": "number",
      "defaultValue": "undefined"
    },
    "objectType": {
      "type": "object",
      "defaultValue": "undefined"
    },
    "stringType": {
      "type": "string",
      "defaultValue": "undefined"
    },
    "symbolType": {
      "type": "symbol",
      "defaultValue": "undefined"
    },
    "undefinedType": {
      "type": "undefined",
      "defaultValue": "undefined"
    }
  }
}

```
---
<a id="type-decorator-primitives-with-defaults-legacy">**type-decorator-primitives-with-defaults-legacy**</a>

**Input** (<small>[type-decorator-primitives-with-defaults-legacy.input.js](transforms/argument-decorators-to-json/__testfixtures__/type-decorator-primitives-with-defaults-legacy.input.js)</small>):
```js
class Foo extends Component {
  @argument
  @type('any')
  anyType = NaN;

  @argument
  @type('boolean')
  booleanType = true;

  @argument
  @type('null')
  nullType = null;

  @argument
  @type('number')
  numberType = 1;

  @argument
  @type('object')
  objectType = {};

  @argument
  @type('string')
  stringType = '';

  @argument
  @type('symbol')
  symbolType = Symbol();

  @argument
  @type('undefined')
  undefinedType = undefined;
}

```

**Output** (<small>[type-decorator-primitives-with-defaults-legacy.output.json](transforms/argument-decorators-to-json/__testfixtures__/type-decorator-primitives-with-defaults-legacy.output.json)</small>):
```json
{
  "componentClassName": "Foo",
  "arguments": {
    "anyType": {
      "type": "any",
      "defaultValue": "NaN"
    },
    "booleanType": {
      "type": "boolean",
      "defaultValue": true
    },
    "nullType": {
      "type": "null",
      "defaultValue": null
    },
    "numberType": {
      "type": "number",
      "defaultValue": 1
    },
    "objectType": {
      "type": "object",
      "defaultValue": {}
    },
    "stringType": {
      "type": "string",
      "defaultValue": ""
    },
    "symbolType": {
      "type": "symbol",
      "defaultValue": "Symbol()"
    },
    "undefinedType": {
      "type": "undefined",
      "defaultValue": "undefined"
    },
  }
}

```
---
<a id="type-decorator-primitives-with-defaults">**type-decorator-primitives-with-defaults**</a>

**Input** (<small>[type-decorator-primitives-with-defaults.input.js](transforms/argument-decorators-to-json/__testfixtures__/type-decorator-primitives-with-defaults.input.js)</small>):
```js
class Foo extends Component {
  @argument('any')
  anyArgument = NaN;

  @argument('boolean')
  booleanArgument = true;

  @argument('null')
  nullArgument = null;

  @argument('number')
  numberArgument = 1;

  @argument('object')
  objectArgument = {};

  @argument('string')
  stringArgument = '';

  @argument('symbol')
  symbolArgument = Symbol();

  @argument('undefined')
  undefinedArgument = undefined;
}

```

**Output** (<small>[type-decorator-primitives-with-defaults.output.json](transforms/argument-decorators-to-json/__testfixtures__/type-decorator-primitives-with-defaults.output.json)</small>):
```json
{
  "componentClassName": "Foo",
  "arguments": {
    "anyArgument": {
      "type": "any",
      "defaultValue": "NaN"
    },
    "booleanArgument": {
      "type": "boolean",
      "defaultValue": true
    },
    "nullArgument": {
      "type": "null",
      "defaultValue": null
    },
    "numberArgument": {
      "type": "number",
      "defaultValue": 1
    },
    "objectArgument": {
      "type": "object",
      "defaultValue": {}
    },
    "stringArgument": {
      "type": "string",
      "defaultValue": ""
    },
    "symbolArgument": {
      "type": "symbol",
      "defaultValue": "Symbol()"
    },
    "undefinedArgument": {
      "type": "undefined",
      "defaultValue": "undefined"
    }
  }
}

```
---
<a id="type-decorator-primitives">**type-decorator-primitives**</a>

**Input** (<small>[type-decorator-primitives.input.js](transforms/argument-decorators-to-json/__testfixtures__/type-decorator-primitives.input.js)</small>):
```js
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
}

```

**Output** (<small>[type-decorator-primitives.output.json](transforms/argument-decorators-to-json/__testfixtures__/type-decorator-primitives.output.json)</small>):
```json
{
  "componentClassName": "Foo",
  "arguments": {
    "anyArgument": {
      "type": "any",
      "defaultValue": "undefined"
    },
    "booleanArgument": {
      "type": "boolean",
      "defaultValue": "undefined"
    },
    "nullArgument": {
      "type": "null",
      "defaultValue": "undefined"
    },
    "numberArgument": {
      "type": "number",
      "defaultValue": "undefined"
    },
    "objectArgument": {
      "type": "object",
      "defaultValue": "undefined"
    },
    "stringArgument": {
      "type": "string",
      "defaultValue": "undefined"
    },
    "symbolArgument": {
      "type": "symbol",
      "defaultValue": "undefined"
    },
    "undefinedArgument": {
      "type": "undefined",
      "defaultValue": "undefined"
    }
  }
}

```
<!--FIXTURES_CONTENT_END-->