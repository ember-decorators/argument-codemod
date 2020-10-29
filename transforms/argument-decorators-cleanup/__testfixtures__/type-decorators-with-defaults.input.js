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