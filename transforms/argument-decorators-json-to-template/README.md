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

```
---
<a id="type-decorator-primitives">**type-decorator-primitives**</a>

**Input** (<small>[type-decorator-primitives.input.json](transforms/argument-decorators-json-to-template/__testfixtures__/type-decorator-primitives.input.json)</small>):
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
    }
  }
}

```

**Output** (<small>[type-decorator-primitives.output.hbs](transforms/argument-decorators-json-to-template/__testfixtures__/type-decorator-primitives.output.hbs)</small>):
```hbs
{{arg-type @anyType "any" path="anyType"}}
{{arg-type @booleanType "boolean" path="booleanType"}}
{{arg-type @nullType "null" path="nullType"}}
{{arg-type @numberType "number" path="numberType"}}
{{arg-type @objectType "object" path="objectType"}}
{{arg-type @stringType "string" path="stringType"}}
{{arg-type @symbolType "symbol" path="symbolType"}}
{{arg-type @undefinedType "undefined" path="undefinedType"}}

```
<!--FIXTURES_CONTENT_END-->