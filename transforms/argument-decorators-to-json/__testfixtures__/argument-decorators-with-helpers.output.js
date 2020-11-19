class Foo extends Component {
  @argument(optional(Date))
  optionalArgument;

  @argument(arrayOf('string'))
  arrayArgument;

  @argument(oneOf('red', 'blue', 'yellow'))
  oneArgument;

  @argument(unionOf('number', 'string'))
  unionArgument;

  @argument(shapeOf({ id: 'string' }))
  shapeArgument;

  @argument(
    unionOf(
      'string',
      shapeOf({
        id: optional('string')
      })
    )
  )
  nestedArgument;
}
