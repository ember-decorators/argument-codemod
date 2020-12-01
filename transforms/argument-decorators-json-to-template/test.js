'use strict';

const { runTransformTest } = require('codemod-cli');

// TODO: write custom tests that use json data to build arg-type helpers
runTransformTest({
  name: 'argument-decorators-json-to-template',
});