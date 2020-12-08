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
  @someOtherDecorator
  @someOtherDecoratorFunction('yo')
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
