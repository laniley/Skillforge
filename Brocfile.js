/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  'ember-cli-bootstrap-sass': {
    'importBootstrapJS': true
  }
});

app.import('vendor/facebook-sdk.js');

module.exports = app.toTree();
