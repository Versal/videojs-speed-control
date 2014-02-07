(function(vjs) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  var isHtmlSupported;

  module('videojs.speed-control', {
    // This will run before each test in this module.
    setup: function() {
      // grab a reference to the video
      var video = document.querySelector('#qunit-fixture video');
      isHtmlSupported = videojs.Html5.isSupported;

      if (/phantomjs/gi.test(window.navigator.userAgent)) {
        // PhantomJS doesn't have a video element implementation
        // force support here so that the HTML5 tech is still used during
        // command-line test runs
        videojs.Html5.isSupported = function() {
          return true;
        };

        // provide implementations for any video element functions that are
        // used in the tests
        video.load = function() {};
      }

      this.player = vjs(video);
    },

    teardown: function() {
      // restore the original html5 support test
      videojs.Html5.isSupported = isHtmlSupported;
    }
  });

  test('is registered', function() {
    expect(1);
    ok(this.player.speed-control, 'the speed-control plugin is present');
  });

  test('is awesome', function() {
    expect(2);
    this.player.speed-control();
    strictEqual(this.player.speed-control.go(), 'awesome.', 'should be awesome');
    strictEqual(this.player.speed-control.extreme(), 'awesome!', 'should be thoroughly awesome');
  });

  test('default options can be overridden', function() {
    expect(1);
    this.player.speed-control({
      awesome: false
    });

    strictEqual(this.player.speed-control.go(), ':(', 'should be sad face');
  });

}(window.videojs));
