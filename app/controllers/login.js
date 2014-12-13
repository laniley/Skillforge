import Ember from 'ember';
import Torii from 'simple-auth-torii/authenticators/torii';

export default Ember.Controller.extend({
  actions: {
    login: function()
    {
      this.get('session').authenticate('simple-auth-authenticator:torii', 'facebook-oauth2');
    }
  }
});
