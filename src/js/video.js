const videoBtn = document.querySelector('[data-video="btn"]');
const video = document.querySelector('[data-video="video"]');

if (videoBtn) {
  videoBtn.addEventListener('click', stateVideo);
  video.addEventListener('click', stateVideo);
}

function stateVideo() {
  video.play();
  videoBtn.style.display = 'none';
  video.addEventListener('play', changeStateVideo);
  video.addEventListener('pause', pauseVideo);
}

function changeStateVideo () {
  this.controls = 'controls';
}

function pauseVideo() {
  this.controls = '';
  videoBtn.style.display = '';
}