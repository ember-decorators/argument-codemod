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
  "componentFileName": "type-decorator-helpers",
  "arguments": {
    "optionalArgument": {
      "type": "optional",
      "args": "Date"
    },
    "arrayArgument": {
      "type": "arrayOf",
      "args": "\"string\""
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
      "args": {
        "id": {
          "type": "\"string\""
        }
      }
    },
    "unionArgument": {
      "type": {
        "unionOf": [
          { "type": "\"number\"" },
          { "type": "\"string\"" }
        ]
      }
    },
    "nestedArgument": {
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
<a id="type-decorator-primitives-legacy">**type-decorator-primitives-legacy**</a>

**Input** (<small>[type-decorator-primitives-legacy.input.js](transforms/argument-decorators-to-json/__testfixtures__/type-decorator-primitives-legacy.input.js)</small>):
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

**Output** (<small>[type-decorator-primitives-legacy.output.json](transforms/argument-decorators-to-json/__testfixtures__/type-decorator-primitives-legacy.output.json)</small>):
```json
{
  "componentClassName": "Foo",
  "componentFileName": "type-decorator-primitives-legacy",
  "arguments": {
    "anyType": {
      "type": "\"any\""
    },
    "booleanType": {
      "type": "\"boolean\""
    },
    "nullType": {
      "type": "\"null\""
    },
    "numberType": {
      "type": "\"number\""
    },
    "objectType": {
      "type": "\"object\""
    },
    "stringType": {
      "type": "\"string\""
    },
    "symbolType": {
      "type": "\"symbol\""
    },
    "undefinedType": {
      "type": "\"undefined\""
    },
    "actionType": {
      "type": "Action"
    },
    "classicActionType": {
      "type": "ClassicAction"
    },
    "elementType": {
      "type": "Element"
    },
    "nodeType": {
      "type": "Node"
    },
    "classType": {
      "type": "MyClass"
    }
  }
}

```
---
<a id="type-decorator-primitives-with-defaults-legacy">**type-decorator-primitives-with-defaults-legacy**</a>

**Input** (<small>[type-decorator-primitives-with-defaults-legacy.input.js](transforms/argument-decorators-to-json/__testfixtures__/type-decorator-primitives-with-defaults-legacy.input.js)</small>):
```js
import {
  Action,
  ClassicAction,
  Element,
  Node
} from '@ember-decorators/argument/types';

class MyClass {
  constructor() {}
}
const myClassInstance = new MyClass();

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

  @argument
  @type(Action)
  actionType = () => {};

  @argument
  @type(ClassicAction)
  classicActionType = 'myActionName';

  @argument
  @type(Element)
  elementType = window.Element;

  @argument
  @type(Node)
  nodeType = window.Node;

  @argument
  @type(MyClass)
  classType = myClassInstance;
}

```

**Output** (<small>[type-decorator-primitives-with-defaults-legacy.output.json](transforms/argument-decorators-to-json/__testfixtures__/type-decorator-primitives-with-defaults-legacy.output.json)</small>):
```json
{
  "componentClassName": "Foo",
  "componentFileName": "type-decorator-primitives-with-defaults-legacy",
  "arguments": {
    "anyType": {
      "type": "\"any\""
    },
    "booleanType": {
      "type": "\"boolean\""
    },
    "nullType": {
      "type": "\"null\""
    },
    "numberType": {
      "type": "\"number\""
    },
    "objectType": {
      "type": "\"object\""
    },
    "stringType": {
      "type": "\"string\""
    },
    "symbolType": {
      "type": "\"symbol\""
    },
    "undefinedType": {
      "type": "\"undefined\""
    },
    "actionType": {
      "type": "Action"
    },
    "classicActionType": {
      "type": "ClassicAction"
    },
    "elementType": {
      "type": "Element"
    },
    "nodeType": {
      "type": "Node"
    },
    "classType": {
      "type": "MyClass"
    }
  }
}

```
---
<a id="type-decorator-primitives-with-defaults">**type-decorator-primitives-with-defaults**</a>

**Input** (<small>[type-decorator-primitives-with-defaults.input.js](transforms/argument-decorators-to-json/__testfixtures__/type-decorator-primitives-with-defaults.input.js)</small>):
```js
import {
  Action,
  ClassicAction,
  Element,
  Node
} from '@ember-decorators/argument/types';

class MyClass {
  constructor() {}
}
const myClassInstance = new MyClass();

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

  @argument(Action)
  actionArgument = () => {};

  @argument(ClassicAction)
  classicActionArgument = 'myActionName';

  @argument(Element)
  elementArgument = window.Element;

  @argument(Node)
  nodeArgument = window.Node;

  @argument(MyClass)
  classArgument = myClassInstance;
}

```

**Output** (<small>[type-decorator-primitives-with-defaults.output.json](transforms/argument-decorators-to-json/__testfixtures__/type-decorator-primitives-with-defaults.output.json)</small>):
```json
{
  "componentClassName": "Foo",
  "componentFileName": "type-decorator-primitives-with-defaults",
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
<a id="type-decorator-primitives">**type-decorator-primitives**</a>

**Input** (<small>[type-decorator-primitives.input.js](transforms/argument-decorators-to-json/__testfixtures__/type-decorator-primitives.input.js)</small>):
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

**Output** (<small>[type-decorator-primitives.output.json](transforms/argument-decorators-to-json/__testfixtures__/type-decorator-primitives.output.json)</small>):
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
<!--FIXTURES_CONTENT_END-->