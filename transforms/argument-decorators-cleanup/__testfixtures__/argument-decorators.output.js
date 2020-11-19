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
  anyArgument;

  // Single line comment
  booleanArgument;

  nullArgument;

  numberArgument;

  objectArgument;

  stringArgument;

  symbolArgument;

  undefinedArgument;

  actionArgument;

  classicActionArgument;

  elementArgument;

  nodeArgument;

  classArgument;

  optionalArgument;

  arrayArgument;

  oneArgument;

  shapeArgument;

  unionArgument;

  nestedArgument;
}
