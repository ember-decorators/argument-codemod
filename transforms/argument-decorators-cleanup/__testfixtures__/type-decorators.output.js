import {
  Element,
  Node
} from '@ember-decorators/argument/types';

class MyClass {}

class Foo extends Component {
  // begin: ember-argument-types class references
  __Element = Element;
  __Node = Node;
  __MyClass = MyClass;
  // end: ember-argument-types class references
}
