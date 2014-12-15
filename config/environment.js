/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'skillforge',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',

    // for the FB-SDK
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' use.typekit.net connect.facebook.net maps.googleapis.com maps.gstatic.com",
      'font-src': "'self' data: use.typekit.net",
      'connect-src': "'self'",
      'img-src': "'self' www.facebook.com p.typekit.net",
      'style-src': "'self' 'unsafe-inline' use.typekit.net",
      'frame-src': "s-static.ak.facebook.com static.ak.facebook.com www.facebook.com",
      'report-uri': '/_/csp-reports'
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV['torii'] = {
      providers: {
        'facebook-oauth2': {
          apiKey: '627975950646452',
          redirectUri: 'http://localhost:4200/login'
        }
      }
    };

    ENV['simple-auth'] = {
      routeAfterAuthentication: 'members-area',
      routeIfAlreadyAuthenticated: 'members-area'
    };

    ENV['torii'] = {
      providers: {
        'facebook-connect': {
          appId: '627975950646452',
          scope: 'public_profile, user_friends'
          //redirectUri: 'http://localhost:4200/members-area'
        }
      }
    };

  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

    ENV['torii'] = {
      providers: {
        'facebook-oauth2': {
          apiKey: '609402455837135',
          redirectUri: 'http://meme-games.com/apps/skillforge/members-area'
        }
      }
    };

  }

  return ENV;
};
