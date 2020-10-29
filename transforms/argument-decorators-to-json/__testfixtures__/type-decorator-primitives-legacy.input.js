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
}