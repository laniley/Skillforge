import Ember from 'ember';
import AuthenticateRoute from './authenticate';

/* global FB */

export default AuthenticateRoute.extend({
  beforeModel: function() {
    this.get('session').authenticate('simple-auth-authenticator:torii', 'facebook-connect')
        .then(function(data) {

          FB.api('/me', {fields: 'id,name,first_name,picture.width(120).height(120)'}, function(response)
          {
              if( !response.error )
              {
                console.log(response);

                // userModel.id = response.id;
                // userModel.full_name = response.name;
                // userModel.first_name = response.first_name;
                // userModel.picture = response.picture;

                // console.log('Successful login for: ' + userModel.full_name);

                // $("#fb-like").html('<iframe src="//www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fskillforgegame&amp;width=200&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;share=true&amp;height=21&amp;appId=609402455837135" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:200px; height:21px;" allowTransparency="true"></iframe>');

                // saveLoginToDB();
              }
              else
              {
                conole.log(response.error);
              }
            });

        });
  }
});
