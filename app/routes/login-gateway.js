import Ember from 'ember';
import AuthenticateRoute from './authenticate';

export default AuthenticateRoute.extend({
  beforeModel: function() {
    this.transitionTo('members-area');
  }
});
