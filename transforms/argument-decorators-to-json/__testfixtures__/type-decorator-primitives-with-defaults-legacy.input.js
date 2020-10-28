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

  @argument
  @type(Action)
  actionType = () => {};

  @argument
  @type(ClassicAction)
  classicActionType = 'myActionName';

  @argument
  @type(Element)
  elementType = window.Element;

  @argument
  @type(Node)
  nodeType = window.Node;

  @argument
  @type(MyClass)
  classType = myClassInstance;
}
