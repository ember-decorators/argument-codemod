# argument-decorators-json-to-template


## Usage

```
npx @ember-decorators/argument-codemod argument-decorators-json-to-template path/of/files/ or/some**/*glob.js

# or

yarn global add @ember-decorators/argument-codemod
@ember-decorators/argument-codemod argument-decorators-json-to-template path/of/files/ or/some**/*glob.js
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

**Input** (<small>[type-decorator-primitives-with-defaults.input.js](transforms/argument-decorators-json-to-template/__testfixtures__/type-decorator-primitives-with-defaults.input.js)</small>):
```js
{
  componentClassName: 'Foo',
  arguments: {
    anyType: {
      type: 'any',
      value: NaN,
    },
    booleanType: {
      type: 'boolean',
      value: true,
    },
    nullType: {
      type: 'null',
      value: null,
    },
    numberType: {
      type: 'number',
      value: 1,
    },
    objectType: {
      type: 'object',
      value: {},
    },
    stringType: {
      type: 'string',
      value: '',
    },
    symbolType: {
      type: 'symbol',
      value: Symbol(),
    },
    undefinedType: {
      type: 'undefined',
      value: undefined,
    },
  }
}
```

**Output** (<small>[type-decorator-primitives-with-defaults.output.js](transforms/argument-decorators-json-to-template/__testfixtures__/type-decorator-primitives-with-defaults.output.js)</small>):
```js
{{arg-type this.anyType "any" path="anyType"}}
{{arg-type this.booleanType "boolean" path="booleanType"}}
{{arg-type this.nullType "null" path="nullType"}}
{{arg-type this.numberType "number" path="numberType"}}
{{arg-type this.objectType "object" path="objectType"}}
{{arg-type this.stringType "string" path="stringType"}}
{{arg-type this.symbolType "symbol" path="symbolType"}}
{{arg-type this.undefinedType "undefined" path="undefinedType"}}
```
---
<a id="type-decorator-primitives">**type-decorator-primitives**</a>

**Input** (<small>[type-decorator-primitives.input.js](transforms/argument-decorators-json-to-template/__testfixtures__/type-decorator-primitives.input.js)</small>):
```js
{
  componentClassName: 'Foo',
  arguments: {
    anyType: {
      type: 'any',
      value: NaN,
    },
    booleanType: {
      type: 'boolean',
      value: true,
    },
    nullType: {
      type: 'null',
      value: null,
    },
    numberType: {
      type: 'number',
      value: 1,
    },
    objectType: {
      type: 'object',
      value: {},
    },
    stringType: {
      type: 'string',
      value: '',
    },
    symbolType: {
      type: 'symbol',
      value: Symbol(),
    },
    undefinedType: {
      type: 'undefined',
      value: undefined,
    },
  }
}
```

**Output** (<small>[type-decorator-primitives.output.js](transforms/argument-decorators-json-to-template/__testfixtures__/type-decorator-primitives.output.js)</small>):
```js
{{arg-type this.anyType "any" path="anyType"}}
{{arg-type this.booleanType "boolean" path="booleanType"}}
{{arg-type this.nullType "null" path="nullType"}}
{{arg-type this.numberType "number" path="numberType"}}
{{arg-type this.objectType "object" path="objectType"}}
{{arg-type this.stringType "string" path="stringType"}}
{{arg-type this.symbolType "symbol" path="symbolType"}}
{{arg-type this.undefinedType "undefined" path="undefinedType"}}
```
<!--FIXTURES_CONTENT_END-->