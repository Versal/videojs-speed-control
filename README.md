# Speed control

Control playback speed

## Getting Started
Download [videojs](http://www.videojs.com/)

In your web page:

```html
<link rel="stylesheet" href="video-js.css">
<video id="video"
       class="video-js vjs-default-skin"
       src="movie.mp4"
       controls>
</video>
<script src="video.js"></script>
<script src="dist/videojs.speed-control.min.js"></script>
<script>
videojs('video', {}, function() {
  var player = this;
  player.speed-control(); // initialize the plugin
});
</script>
```

## Documentation
_(Coming soon)_

## Examples
Check out example.html to see Speed control in action.

## Release History
_(Nothing yet)_
