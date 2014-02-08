/*
 * speed-control
 * https://github.com/Versal/videojs-speed-control
 *
 * Copyright (c) 2014 Versal Team
 * Licensed under the MIT license.
 */

(function(vjs) {

  /**
   * Construct the speed control
   * @constructor
   * @param {Object} player reference to video player
   * @param {Object} options passed in from plugin initialization
   */
  vjs.SpeedControl = vjs.MenuItem.extend({
    init: function(player, options) {
      var speedSelect = document.createElement('select');

      vjs.MenuItem.call(this, player, options);
      this.player().el().appendChild(speedSelect);
    }
  });

  function speedControl(options) {
    var opts = options || {};

    return new vjs.SpeedControl(this, opts);
  }

  vjs.plugin('speedControl', speedControl);
}(window.videojs));
