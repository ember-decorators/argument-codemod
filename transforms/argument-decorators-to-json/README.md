# argument-decorators-to-json


## Usage

```
npx @ember-decorators/argument-codemod argument-decorators-to-json path/of/files/ or/some**/*glob.js

# or

yarn global add @ember-decorators/argument-codemod
@ember-decorators/argument-codemod argument-decorators-to-json path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js argument-decorators-to-json path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [type-decorator-primitives-with-defaults](#type-decorator-primitives-with-defaults)
* [type-decorator-primitives](#type-decorator-primitives)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="type-decorator-primitives-with-defaults">**type-decorator-primitives-with-defaults**</a>

**Input** (<small>[type-decorator-primitives-with-defaults.input.js](transforms/argument-decorators-to-json/__testfixtures__/type-decorator-primitives-with-defaults.input.js)</small>):
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

**Output** (<small>[type-decorator-primitives-with-defaults.output.js](transforms/argument-decorators-to-json/__testfixtures__/type-decorator-primitives-with-defaults.output.js)</small>):
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
---
<a id="type-decorator-primitives">**type-decorator-primitives**</a>

**Input** (<small>[type-decorator-primitives.input.js](transforms/argument-decorators-to-json/__testfixtures__/type-decorator-primitives.input.js)</small>):
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

**Output** (<small>[type-decorator-primitives.output.js](transforms/argument-decorators-to-json/__testfixtures__/type-decorator-primitives.output.js)</small>):
```js
{
  componentClassName: 'Foo',
  arguments: {
    anyType: {
      type: 'any',
      value: undefined,
    },
    booleanType: {
      type: 'boolean',
      value: undefined,
    },
    nullType: {
      type: 'null',
      value: undefined,
    },
    numberType: {
      type: 'number',
      value: undefined,
    },
    objectType: {
      type: 'object',
      value: undefined,
    },
    stringType: {
      type: 'string',
      value: undefined,
    },
    symbolType: {
      type: 'symbol',
      value: undefined,
    },
    undefinedType: {
      type: 'undefined',
      value: undefined,
    },
  }
}
```
<!--FIXTURES_CONTENT_END-->