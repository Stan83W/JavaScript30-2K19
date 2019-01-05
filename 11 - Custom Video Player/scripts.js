
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButton = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");


function togglePlay() {
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}


video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);

skipButton.forEach(button => button.addEventListener('click', skip));










