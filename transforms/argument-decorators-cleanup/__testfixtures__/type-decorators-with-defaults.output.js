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
