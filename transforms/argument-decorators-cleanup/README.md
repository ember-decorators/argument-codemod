# argument-decorators-cleanup


## Usage

```
npx @ember-decorators/argument-codemod argument-decorators-cleanup path/of/files/ or/some**/*glob.js

# or

yarn global add @ember-decorators/argument-codemod
@ember-decorators/argument-codemod argument-decorators-cleanup path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js argument-decorators-cleanup path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [argument-decorators-with-defaults](#argument-decorators-with-defaults)
* [argument-decorators](#argument-decorators)
* [type-decorators-with-defaults](#type-decorators-with-defaults)
* [type-decorators](#type-decorators)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="argument-decorators-with-defaults">**argument-decorators-with-defaults**</a>

**Input** (<small>[argument-decorators-with-defaults.input.js](transforms/argument-decorators-cleanup/__testfixtures__/argument-decorators-with-defaults.input.js)</small>):
```js
import {
  Action,
  ClassicAction,
  Element,
  Node
} from '@ember-decorators/argument/types';

class MyClass {}
const myClassInstance = new MyClass();

class Foo extends Component {
  /**
   * A multi-line comment
   * @type {'any'}
   */
  @argument('any')
  anyArgument = NaN;

  // Single line comment
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
  classicActionArgument = 'myAction';

  @argument(Element)
  elementArgument = window.Element;

  @argument(Node)
  nodeArgument = window.Node;

  @argument(MyClass)
  classArgument = myClassInstance;

  @argument(optional(Date))
  optionalArgument = new Date();

  @argument(arrayOf('string'))
  arrayArgument = ['one', 'two', 'three'];

  @argument(oneOf('red', 'blue', 'yellow'))
  oneArgument = 'blue';

  @argument(shapeOf({ id: 'string' }))
  shapeArgument = { id: 'hello' };

  @argument(unionOf('number', 'string'))
  unionArgument = '1';

  @argument(unionOf('string', shapeOf({ id: optional('string') })))
  nestedArgument = { id: '1' };
}

```

**Output** (<small>[argument-decorators-with-defaults.output.js](transforms/argument-decorators-cleanup/__testfixtures__/argument-decorators-with-defaults.output.js)</small>):
```js
import {
  Element,
  Node
} from '@ember-decorators/argument/types';

class MyClass {}
const myClassInstance = new MyClass();

class Foo extends Component {
  // begin: ember-argument-types class references
  __Element = Element;
  __Node = Node;
  __MyClass = MyClass;
  // end: ember-argument-types class references

  /**
   * A multi-line comment
   * @type {'any'}
   */
  anyArgument = NaN;

  // Single line comment
  booleanArgument = true;

  nullArgument = null;

  numberArgument = 1;

  objectArgument = {};

  stringArgument = '';

  symbolArgument = Symbol();

  undefinedArgument = undefined;

  actionArgument = () => {};

  classicActionArgument = 'myAction';

  elementArgument = window.Element;

  nodeArgument = window.Node;

  classArgument = myClassInstance;

  optionalArgument = new Date();

  arrayArgument = ['one', 'two', 'three'];

  oneArgument = 'blue';

  shapeArgument = { id: 'hello' };

  unionArgument = '1';

  nestedArgument = { id: '1' };
}

```
---
<a id="argument-decorators">**argument-decorators**</a>

**Input** (<small>[argument-decorators.input.js](transforms/argument-decorators-cleanup/__testfixtures__/argument-decorators.input.js)</small>):
```js
import {
  Action,
  ClassicAction,
  Element,
  Node
} from '@ember-decorators/argument/types';

class MyClass {}

class Foo extends Component {
  /**
   * A multi-line comment
   * @type {'any'}
   */
  @argument('any')
  anyArgument;

  // Single line comment
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

**Output** (<small>[argument-decorators.output.js](transforms/argument-decorators-cleanup/__testfixtures__/argument-decorators.output.js)</small>):
```js
import {
  Element,
  Node
} from '@ember-decorators/argument/types';

class MyClass {}

class Foo extends Component {
  // begin: ember-argument-types class references
  __Element = Element;
  __Node = Node;
  __MyClass = MyClass;
  // end: ember-argument-types class references
}

```
---
<a id="type-decorators-with-defaults">**type-decorators-with-defaults**</a>

**Input** (<small>[type-decorators-with-defaults.input.js](transforms/argument-decorators-cleanup/__testfixtures__/type-decorators-with-defaults.input.js)</small>):
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
  anyArgument = NaN;

  @argument
  @type('boolean')
  booleanArgument = true;

  @argument
  @type('null')
  nullArgument = null;

  @argument
  @type('number')
  numberArgument = 1;

  @argument
  @type('object')
  objectArgument = {};

  @argument
  @type('string')
  stringArgument = '';

  @argument
  @type('symbol')
  symbolArgument = Symbol();

  @argument
  @type('undefined')
  undefinedArgument = undefined;

  @argument
  @type(Action)
  actionArgument = () => {};

  @argument
  @type(ClassicAction)
  classicActionArgument = 'myAction';

  @argument
  @type(Element)
  elementArgument = window.Element;

  @argument
  @type(Node)
  nodeArgument = window.Node;

  @argument
  @type(MyClass)
  classArgument = myClassInstance;

  @argument
  @type(optional(Date))
  optionalArgument = new Date();

  @argument
  @type(arrayOf('string'))
  arrayArgument = ['one', 'two', 'three'];

  @argument
  @type(oneOf('red', 'blue', 'yellow'))
  oneArgument = 'blue';

  @argument
  @type(shapeOf({ id: 'string' }))
  shapeArgument = { id: 'hello' };

  @argument
  @type(unionOf('number', 'string'))
  unionArgument = '1';

  @argument
  @type(unionOf('string', shapeOf({ id: optional('string') })))
  nestedArgument = { id: '1' };
}
```

**Output** (<small>[type-decorators-with-defaults.output.js](transforms/argument-decorators-cleanup/__testfixtures__/type-decorators-with-defaults.output.js)</small>):
```js
import {
  Element,
  Node
} from '@ember-decorators/argument/types';

class MyClass {}
const myClassInstance = new MyClass();

class Foo extends Component {
  // begin: ember-argument-types class references
  __Element = Element;
  __Node = Node;
  __MyClass = MyClass;
  // end: ember-argument-types class references

  /**
   * A multi-line comment
   * @type {'any'}
   */
  anyArgument = NaN;

  // Single line comment
  booleanArgument = true;

  nullArgument = null;

  numberArgument = 1;

  objectArgument = {};

  stringArgument = '';

  symbolArgument = Symbol();

  undefinedArgument = undefined;

  actionArgument = () => {};

  classicActionArgument = 'myAction';

  elementArgument = window.Element;

  nodeArgument = window.Node;

  classArgument = myClassInstance;

  optionalArgument = new Date();

  arrayArgument = ['one', 'two', 'three'];

  oneArgument = 'blue';

  shapeArgument = { id: 'hello' };

  unionArgument = '1';

  nestedArgument = { id: '1' };
}

```
---
<a id="type-decorators">**type-decorators**</a>

**Input** (<small>[type-decorators.input.js](transforms/argument-decorators-cleanup/__testfixtures__/type-decorators.input.js)</small>):
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

**Output** (<small>[type-decorators.output.js](transforms/argument-decorators-cleanup/__testfixtures__/type-decorators.output.js)</small>):
```js
import {
  Element,
  Node
} from '@ember-decorators/argument/types';

class MyClass {}

class Foo extends Component {
  // begin: ember-argument-types class references
  __Element = Element;
  __Node = Node;
  __MyClass = MyClass;
  // end: ember-argument-types class references
}

```
<!--FIXTURES_CONTENT_END-->