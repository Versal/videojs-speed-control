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
      vjs.MenuItem.call(this, player, options);
    }
  });

  function createSpeedControl() {
    var props = {
      className: 'vjs-speed-control vjs-control',
      innerHTML: buildSpeeds(),
      role: 'button',
      'aria-live': 'polite',
      tabIndex: 0
    };

    return vjs.Component.prototype.createEl(null, props);
  }

  /**
   * @returns {String} innerHTML string of <option> elements for select
   */
  function buildSpeeds() {
    // speeds are hard-coded for now - could pass in speeds instead
    // from plugin setup, if necessary
    var speeds = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75],
        resultHTML = '<select class="vjs-speed-select">';

    for (var i in speeds) {
      // make 1.0x the default speed
      if (speeds[i] === 1) {
        resultHTML += '<option value="' + speeds[i] + '"' +
          'selected="selected">1.0x</option>';
      } else {
        resultHTML += '<option value="' + speeds[i] + '"' +
          '>' + speeds[i] + 'x</option>';
      }
    }

    return resultHTML += '</select>';
  }

  /**
   * hook up events to the speed selector
   * @param {Object} select DOM obj of select element
   * @param {Object} player Reference to videojs player
   */
  function setSpeedEvents(select, player) {
    // setup an onChange listener on the speed select
    // and bind it to the player
    select.onchange = function(e) {
      var index = e.target.selectedIndex,
          newRate = e.target.options[index].value;

      // player.M === direct way to access <video>
      return this.M.playbackRate = newRate;
    }.bind(player);
  }

  function speedControl() {
    var options = { 'el': createSpeedControl() },
        speed = new vjs.SpeedControl(this, options),
        select;

    // append the speed select to the videojs control bar
    this.controlBar.el().appendChild(speed.el());
    select = document.getElementsByClassName('vjs-speed-select')[0];

    // pass in select and reference to player to events function
    return setSpeedEvents(select, this);
  }

  vjs.plugin('speedControl', speedControl);
}(window.videojs));
