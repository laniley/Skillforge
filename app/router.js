import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('login', { path: '/'});
  this.route('members-area', { path: '/members-area' });
});

export default Router;
