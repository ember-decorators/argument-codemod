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

  @argument(unionOf('number', 'string'))
  unionArgument;

  @argument(shapeOf({ id: 'string' }))
  shapeArgument;

  @argument(
    unionOf(
      'string',
      shapeOf({
        id: optional('string')
      })
    )
  )
  nestedArgument;
}

```

**Output** (<small>[argument-decorators-with-helpers.output.js](transforms/argument-decorators-to-json/__testfixtures__/argument-decorators-with-helpers.output.js)</small>):
```js
class Foo extends Component {
  @argument(optional(Date))
  optionalArgument;

  @argument(arrayOf('string'))
  arrayArgument;

  @argument(oneOf('red', 'blue', 'yellow'))
  oneArgument;

  @argument(unionOf('number', 'string'))
  unionArgument;

  @argument(shapeOf({ id: 'string' }))
  shapeArgument;

  @argument(
    unionOf(
      'string',
      shapeOf({
        id: optional('string')
      })
    )
  )
  nestedArgument;
}

```
---
<a id="argument-decorators-with-primitives">**argument-decorators-with-primitives**</a>

**Input** (<small>[argument-decorators-with-primitives.input.js](transforms/argument-decorators-to-json/__testfixtures__/argument-decorators-with-primitives.input.js)</small>):
```js
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

  @argument(Function)
  functionArgument() {}

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

**Output** (<small>[argument-decorators-with-primitives.output.js](transforms/argument-decorators-to-json/__testfixtures__/argument-decorators-with-primitives.output.js)</small>):
```js
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

  @argument(Function)
  functionArgument() {}

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
  @type(unionOf('number', 'string'))
  unionArgument;

  @argument
  @type(shapeOf({ id: 'string' }))
  shapeArgument;

  @argument
  @type(
    unionOf(
      'string',
      shapeOf({
        id: optional('string'),
        name: 'string'
      })
    )
  )
  nestedArgument;
}

```

**Output** (<small>[type-decorators-with-helpers.output.js](transforms/argument-decorators-to-json/__testfixtures__/type-decorators-with-helpers.output.js)</small>):
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
  @type(unionOf('number', 'string'))
  unionArgument;

  @argument
  @type(shapeOf({ id: 'string' }))
  shapeArgument;

  @argument
  @type(
    unionOf(
      'string',
      shapeOf({
        id: optional('string'),
        name: 'string'
      })
    )
  )
  nestedArgument;
}

```
---
<a id="type-decorators-with-primitives">**type-decorators-with-primitives**</a>

**Input** (<small>[type-decorators-with-primitives.input.js](transforms/argument-decorators-to-json/__testfixtures__/type-decorators-with-primitives.input.js)</small>):
```js
class MyClass {}
class Foo extends Component {
  @argument
  @type('any')
  @decoratorFoo('foo')
  anyArgument;

  @decoratorFoo('foo')
  @argument
  @type('boolean')
  booleanArgument;

  @argument
  @decoratorFoo('foo')
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
  @type(Function)
  functionArgument() {}

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

**Output** (<small>[type-decorators-with-primitives.output.js](transforms/argument-decorators-to-json/__testfixtures__/type-decorators-with-primitives.output.js)</small>):
```js
class MyClass {}
class Foo extends Component {
  @argument
  @type('any')
  @decoratorFoo('foo')
  anyArgument;

  @decoratorFoo('foo')
  @argument
  @type('boolean')
  booleanArgument;

  @argument
  @decoratorFoo('foo')
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
  @type(Function)
  functionArgument() {}

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
<!--FIXTURES_CONTENT_END-->