# argument-decorators-json-to-template


## Usage

```
npx @ember-decorators/argument-codemod argument-decorators-json-to-template path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js argument-decorators-json-to-template path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [type-decorator-primitives-with-defaults](#type-decorator-primitives-with-defaults)
* [type-decorator-primitives](#type-decorator-primitives)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="type-decorator-primitives-with-defaults">**type-decorator-primitives-with-defaults**</a>

**Input** (<small>[type-decorator-primitives-with-defaults.input.json](transforms/argument-decorators-json-to-template/__testfixtures__/type-decorator-primitives-with-defaults.input.json)</small>):
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

**Output** (<small>[type-decorator-primitives-with-defaults.output.hbs](transforms/argument-decorators-json-to-template/__testfixtures__/type-decorator-primitives-with-defaults.output.hbs)</small>):
```hbs
{{arg-type @anyType "any" path="anyType"}}
{{arg-type @booleanType "boolean" path="booleanType"}}
{{arg-type @nullType "null" path="nullType"}}
{{arg-type @numberType "number" path="numberType"}}
{{arg-type @objectType "object" path="objectType"}}
{{arg-type @stringType "string" path="stringType"}}
{{arg-type @symbolType "symbol" path="symbolType"}}
{{arg-type @undefinedType "undefined" path="undefinedType"}}
{{arg-type @actionType 'function' path="actionType"}}
{{arg-type @classicActionType (unionOf 'string', 'function') path="classicActionType"}}
{{arg-type @elementType (instanceOf "Element") path="elementType"}}
{{arg-type @nodeType (instanceOf "Node") path="nodeType"}}
{{arg-type @classType (instanceOf this.__MyClass__) path="classType"}}
```
---
<a id="type-decorator-primitives">**type-decorator-primitives**</a>

**Input** (<small>[type-decorator-primitives.input.json](transforms/argument-decorators-json-to-template/__testfixtures__/type-decorator-primitives.input.json)</small>):
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

**Output** (<small>[type-decorator-primitives.output.hbs](transforms/argument-decorators-json-to-template/__testfixtures__/type-decorator-primitives.output.hbs)</small>):
```hbs
{{arg-type @anyArgument "any" path="anyArgument"}}
{{arg-type @booleanArgument "boolean" path="booleanArgument"}}
{{arg-type @nullArgument "null" path="nullArgument"}}
{{arg-type @numberArgument "number" path="numberArgument"}}
{{arg-type @objectArgument "object" path="objectArgument"}}
{{arg-type @stringArgument "string" path="stringArgument"}}
{{arg-type @symbolArgument "symbol" path="symbolArgument"}}
{{arg-type @undefinedArgument "undefined" path="undefinedArgument"}}
{{arg-type @actionArgument 'function' path="actionArgument"}}
{{arg-type @classicActionArgument (unionOf 'string', 'function') path="classicActionArgument"}}
{{arg-type @elementArgument (instanceOf "Element") path="elementArgument"}}
{{arg-type @nodeArgument (instanceOf "Node") path="nodeArgument"}}
{{arg-type @classArgument (instanceOf this.__MyClass__) path="classArgument"}}
```
<!--FIXTURES_CONTENT_END-->