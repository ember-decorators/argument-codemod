class Foo extends Component {
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
