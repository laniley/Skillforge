/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var pickFiles = require('broccoli-static-compiler');

var app = new EmberApp({
  'ember-cli-bootstrap-sass': {
    'importBootstrapJS': true
  }
});

// import i18n
app.import( 'bower_components/ember-i18n/lib/i18n.js' );
app.import( 'bower_components/ember-i18n/lib/i18n-plurals.js' );

app.import( 'bower_components/jquery-cookie/jquery.cookie.js' );

app.import('vendor/facebook-sdk.js');

module.exports = app.toTree();
