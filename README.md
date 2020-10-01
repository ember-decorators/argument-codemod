# @ember-decorators/argument-codemod


A collection of codemods for migrating from [@ember-decorators/argument](https://github.com/ember-decorators/argument) to [ember-argument-types](https://github.com/pzuraq/ember-argument-types)

## Usage

To run a specific codemod from this project, you would run the following:

```
npx @ember-decorators/argument-codemod <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Transforms

<!--TRANSFORMS_START-->
* [argument-decorators-json-to-template](transforms/argument-decorators-json-to-template/README.md)
* [argument-decorators-to-json](transforms/argument-decorators-to-json/README.md)
<!--TRANSFORMS_END-->

## Contributing

### Installation

* clone the repo
* change into the repo directory
* `yarn`

### Running tests

* `yarn test`

### Update Documentation

* `yarn update-docs`
