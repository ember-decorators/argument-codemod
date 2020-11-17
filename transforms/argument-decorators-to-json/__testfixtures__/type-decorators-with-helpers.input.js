class Foo extends Component {
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
  @type(unionOf('number', 'string'))
  unionArgument;

  @argument
  @type(shapeOf({ id: 'string' }))
  shapeArgument;

  @argument
  @type(
    unionOf(
      'string',
      shapeOf({
        id: optional('string')
      })
    )
  )
  nestedArgument;
}
