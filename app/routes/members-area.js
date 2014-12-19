import Ember from 'ember';
import AuthenticateRoute from './authenticate';

/* global FB */

export default AuthenticateRoute.extend({

  setupController: function(controller) {

    var self = this;

    if(this.controllerFor('login').get('hasFacebook'))
    {
      this.getUserInfosFromFB(controller);

      // return {id: "10201954938313738", name: "Melanie Mende", first_name: "Melanie"};
    }
    else
    {
      this.get('torii').open('facebook-connect').then(function(authorization){
        // FB.api is now available. authorization contains the UID and
        // accessToken.
        self.controllerFor('login').set('hasFacebook', true);

        self.getUserInfosFromFB(controller);

        // return {id: "10201954938313738", name: "Melanie Mende", first_name: "Melanie"};
      });
    }
  },

  getUserInfosFromFB: function(controller) {

    console.log('get user infos from FB');

    var self = this;

    FB.api('/me', {fields: 'id,name,first_name,picture.width(120).height(120)'}, function(response)
    {
      if( !response.error )
      {
        console.log(response);

        console.log('Successful login for: ' + response.name);

        self.store.find('user', response.id);

        // var user = self.store.createRecord('user', {
        //   id: response.id,
        //   name: response.name,
        //   first_name: response.first_name,
        //   picture: response.picture
        // });


        // controller.set('model', user);
        // $("#fb-like").html('<iframe src="//www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fskillforgegame&amp;width=200&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;share=true&amp;height=21&amp;appId=609402455837135" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:200px; height:21px;" allowTransparency="true"></iframe>');

        // saveLoginToDB();
      }
      else
      {
        console.log(response.error);
      }

    });
  }

});
