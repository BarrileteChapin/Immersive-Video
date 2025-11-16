var video = document.querySelector('#video360');
var playButton = document.querySelector('#play-button');
var loading = document.querySelector('#loading');

// Show play button when video is ready
video.addEventListener('canplay', function() {
  loading.classList.add('hidden');
  playButton.classList.remove('hidden');
});

// Error handling
video.addEventListener('error', function(e) {
  loading.textContent = 'Error loading video. Please try again.';
  console.error('Video error:', e);
});

// Play button click handler
playButton.addEventListener('click', function() {
  video.play().catch(function(error) {
    console.error('Playback error:', error);
  });
  playButton.classList.add('hidden');
});

// Mobile touch support
window.addEventListener('touchstart', function() {
  if (video.paused && playButton.classList.contains('hidden')) {
    video.play();
  }
});

// Show/hide button on pause/play
video.addEventListener('pause', function() {
  if (!video.ended) {
    playButton.classList.remove('hidden');
  }
});

video.addEventListener('play', function() {
  playButton.classList.add('hidden');
});
