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
  @someOtherDecorator
  @someOtherDecoratorFunction('yo')
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
