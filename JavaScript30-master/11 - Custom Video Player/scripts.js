// Elements
const player = document.querySelector('.player');

const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('player__slider')

// functions
function togglePlay() {
  // const action = video.paused ? 'play' : 'pause';
  // video[action]();
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {

}

// Event Listeners
video.addEventListener('click', togglePlay);

toggle.addEventListener('click', togglePlay);
