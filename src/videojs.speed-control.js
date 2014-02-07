/*
 * speed-control
 * https://github.com/Versal/videojs-speed-control
 *
 * Copyright (c) 2014 Versal Team
 * Licensed under the MIT license.
 */

(function(vjs) {

  var
    /**
     * Copies properties from one or more objects onto an original.
     */
    extend = function(obj /*, arg1, arg2, ... */) {
      var arg, i, k;
      for (i = 1; i < arguments.length; i++) {
        arg = arguments[i];
        for (k in arg) {
          if (arg.hasOwnProperty(k)) {
            obj[k] = arg[k];
          }
        }
      }
      return obj;
    },

    // define some reasonable defaults for this sweet plugin
    defaults = {
      awesome: true
    },

    // plugin initializer
    speed-control = function(options) {
      var
        // save a reference to the player instance
        player = this,

        // merge options and defaults
        settings = extend({}, defaults, options || {});

      // replace the initializer with the plugin functionality
      player.speed-control = {
        go: function() {
          if (settings.awesome) {
            return 'awesome.';
          }
          return ':(';
        },
        extreme: function() {
          return 'awesome!';
        }
      };
    };
  
  // register the plugin with video.js
  vjs.plugin('speed-control', speed-control);

}(window.videojs));
