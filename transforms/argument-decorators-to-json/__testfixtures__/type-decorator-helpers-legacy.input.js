class Foo extends Component {
  @argument
  @type(optional(Date))
  optionalType;

  @argument
  @type(arrayOf('string'))
  arrayType;

  @argument
  @type(oneOf('red', 'blue', 'yellow'))
  oneType;

  @argument
  @type(shapeOf({ id: 'string' }))
  shapeType;

  @argument
  @type(unionOf('number', 'string'))
  unionType;

  @argument
  @type(unionOf('string', shapeOf({ id: optional('string') })))
  nestedType;
}
