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
}
