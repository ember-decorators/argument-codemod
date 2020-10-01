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
}
