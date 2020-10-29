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