# @ember-decorators/argument-codemod

A collection of codemods for migrating from [@ember-decorators/argument](https://github.com/ember-decorators/argument) to [ember-argument-types](https://github.com/pzuraq/ember-argument-types)

This set of codemods are to be used together in sequential order to:

1. Create a json map of component properties which use `argument` and `type` decorators provided by `@ember-decorators/argument`.
2. Use the map generated in step one to populate `arg-type` helpers provided by `ember-argument-types` in the associated template.
3. Remove `argument` and `type` decorators and their imports from the component js class and optionally add the `@classic` decorator to the class.

Why would you do this? If you're using `@ember-decorators/argument` decorators they will prevent you from upgrading your ember version beyond 2.12. The goal of this codemod is to unblock the upgrade path while still maintaining the ability to dynamically type check the arguments being passed to your component.

Note, if you don't want/need component argument type checking, you can run just the third transform to remove the decorators without adding the `arg-type` helpers to templates.

## Known limitations

- Component names must be unique (doesn't account for nested component paths)
- Decorator values can't be references. For example `let obj = {}; @argument(shapeOf(obj))` will throw an error.
- The path to the `argument-decorators-to-json.json` file is not configurable and the file will be generated in the dir where the command is run.

## Usage

To run a specific codemod from this project, you would run the following:

```
npx @ember-decorators/argument-codemod <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

Note that when running the `argument-decorators-to-json` transform, you _must_ include the `--run-in-band` flag:

```
npx @ember-decorators/argument-codemod argument-decorators-to-json path/of/files/ --run-in-band
```

## Local Usage

```
node ./bin/cli.js <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Transforms

<!--TRANSFORMS_START-->

- [argument-decorators-cleanup](transforms/argument-decorators-cleanup/README.md)
- [argument-decorators-json-to-template](transforms/argument-decorators-json-to-template/README.md)
- [argument-decorators-to-json](transforms/argument-decorators-to-json/README.md)
<!--TRANSFORMS_END-->

## Contributing

### Installation

- clone the repo
- change into the repo directory
- `yarn`

### Running tests

- `yarn test`

### Update Documentation

- `yarn update-docs`
