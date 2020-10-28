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
