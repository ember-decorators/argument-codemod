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