# argument-decorators-json-to-template


## Usage

```
npx @ember-decorators/argument-codemod argument-decorators-json-to-template path/of/files/ or/some**/*glob.hbs

# or

yarn global add @ember-decorators/argument-codemod
@ember-decorators/argument-codemod argument-decorators-json-to-template path/of/files/ or/some**/*glob.hbs
```

## Local Usage
```
node ./bin/cli.js argument-decorators-json-to-template path/of/files/ or/some**/*glob.hbs
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [arguments-with-helpers](#arguments-with-helpers)
* [arguments-with-primitives](#arguments-with-primitives)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="arguments-with-helpers">**arguments-with-helpers**</a>

**Input** (<small>[arguments-with-helpers.input.hbs](transforms/argument-decorators-json-to-template/__testfixtures__/arguments-with-helpers.input.hbs)</small>):
```hbs

```

**Output** (<small>[arguments-with-helpers.output.hbs](transforms/argument-decorators-json-to-template/__testfixtures__/arguments-with-helpers.output.hbs)</small>):
```hbs
{{arg-type @optionalArgument (optional (instance-of this.__Date)) path="optionalArgument"}}
{{arg-type @arrayArgument (array-of 'string') path="arrayArgument"}}
{{arg-type @oneArgument (one-of 'red' 'blue' 'yellow') path="oneArgument"}}
{{arg-type @shapeArgument (shape-of id='string') path="shapeArgument"}}
{{arg-type @unionArgument (union-of 'number' 'string') path="unionArgument"}}
{{arg-type @nestedArgument (union-of 'string' (shape-of id=(optional 'string'))) path="nestedArgument"}}

<div>Oh hey here's some template content</div>
```
---
<a id="arguments-with-primitives">**arguments-with-primitives**</a>

**Input** (<small>[arguments-with-primitives.input.hbs](transforms/argument-decorators-json-to-template/__testfixtures__/arguments-with-primitives.input.hbs)</small>):
```hbs
<div>Oh hey here's some template content</div>
```

**Output** (<small>[arguments-with-primitives.output.hbs](transforms/argument-decorators-json-to-template/__testfixtures__/arguments-with-primitives.output.hbs)</small>):
```hbs
{{arg-type @anyArgument "any" path="anyArgument"}}
{{arg-type @booleanArgument "boolean" path="booleanArgument"}}
{{arg-type @nullArgument "null" path="nullArgument"}}
{{arg-type @numberArgument "number" path="numberArgument"}}
{{arg-type @objectArgument "object" path="objectArgument"}}
{{arg-type @stringArgument "string" path="stringArgument"}}
{{arg-type @symbolArgument "symbol" path="symbolArgument"}}
{{arg-type @undefinedArgument "undefined" path="undefinedArgument"}}
{{arg-type @actionArgument "function" path="actionArgument"}}
{{arg-type @classicActionArgument (union-of "string", "function") path="classicActionArgument"}}
{{arg-type @elementArgument (instance-of this.__Element) path="elementArgument"}}
{{arg-type @nodeArgument (instance-of this.__Node) path="nodeArgument"}}
{{arg-type @classArgument (instance-of this.__MyClass) path="classArgument"}}

<div>Oh hey here's some template content</div>
```
<!--FIXTURES_CONTENT_END-->