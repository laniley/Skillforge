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

        var user = self.store.createRecord('user', {
          id: response.id,
          name: response.name,
          // first_name: response.first_name,
          picture: response.picture.url
        });

        user.save().then
        (
          function()
          {
            controller.set('model', user);
          // loadCharacters();

          // loadUserData(function()
          // {
            // $('#audio-player').mediaelementplayer
            // ({
            //         alwaysShowControls: true,
            //         features: ['volume'],
            //         audioVolume: 'horizontal',
            //         startVolume: userModel.volume,
            //         success: function(player, node)
            //         {
            //             $(".mejs-horizontal-volume-slider").show();

            //             if(userModel.volume == 0)
            //             {
            //               player.muted = true;
            //             }

            //             player.play();

            //             player.addEventListener('ended', function(e)
            //             {
            //               // player.src = 'audio/forest_song.mp3';
            //               player.src = 'audio/choral.mp3';
            //                 // player.src = 'audio/guitar_loop.mp3';
            //                 player.load();
            //                 player.play();
            //             });

            //             player.addEventListener('volumechange', function(e)
            //             {
            //               if(player.muted)
            //               {
            //                 saveVolume(0);
            //             $("#mute-unmute > i").removeClass("fa-volume-up");
            //             $("#mute-unmute > i").addClass("fa-volume-off");
            //                 $("#current-volume").width(0);
            //               }
            //               else
            //               {
            //                 saveVolume(player.volume);

            //                 if(player.volume == 0)
            //                 {
            //                   $(".mejs-volume-button").removeClass("mejs-mute");
            //                   $(".mejs-volume-button").addClass("mejs-unmute");

            //                   $("#mute-unmute > i").removeClass("fa-volume-up");
            //               $("#mute-unmute > i").addClass("fa-volume-off");
            //                 }
            //                 else
            //                 {
            //                   $("#mute-unmute > i").removeClass("fa-volume-off");
            //               $("#mute-unmute > i").addClass("fa-volume-up");
            //                 }

            //                 $("#current-volume").width(100 * player.volume);
            //               }
            //             });
            //         }
            // });
          // });
          },
          function(resp)
          {
            console.log(resp);
          }
        );

        // $("#fb-like").html('<iframe src="//www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fskillforgegame&amp;width=200&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;share=true&amp;height=21&amp;appId=609402455837135" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:200px; height:21px;" allowTransparency="true"></iframe>');

        // saveLoginToDB();
      }
      else
      {
        console.log(response.error);
      }

    });
  },

  loadUserData: function(callback) {
    // $.ajax
    // ({
    //   url: controller_path_user + "?mode=get" +
    //       "&id=" + userModel.id

    //   ,success: function( data )
    //   {
    //     console.log(data);

    //     if(data.indexOf("ERROR") == -1)
    //     {
    //       var json = JSON.parse(data);

    //       userModel.volume = json[0].volume;
    //       userModel.setLanguage(json[0].locale);

    //       if( json[0].first_login == 1 )
    //         userModel.first_login = true;
    //       else
    //         userModel.first_login = false;

    //       i18n.setLng(json[0].locale, function(t)
    //       {
    //         if(userModel.first_login)
    //           hasher.setHash('section/settings');
    //         else if(charactersCache.length > 0)
    //           hasher.setHash('section/characters');
    //         else
    //           hasher.setHash('section/characters/new?race=human');

    //         callback();
    //       });
    //     }
    //   }
    // });
  }

});
