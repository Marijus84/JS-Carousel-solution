const images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
];

let index = 0;
let intervalID;
let pause = false;
let imgElement = document.querySelector("img");
let playIcon = document.querySelector("#slider-toggle i");
const interval = 2000;

runCarousel();
document
  .querySelector("#slider-previous")
  .addEventListener("click", previousImage);
document.querySelector("#slider-next").addEventListener("click", nextImage);
document.querySelector("#slider-toggle").addEventListener("click", togglePlay);
document.querySelector("#slider-random").addEventListener("click", random);
document.querySelector("#toolbar").addEventListener("click", toggleToolbar);
document.querySelector("img").addEventListener("load", transitionAdd);

function runCarousel() {
  playIcon.classList.toggle("fa-play");
  playIcon.classList.toggle("fa-pause");
  imgElement.src = images[index];
  intervalID = setInterval(changeImage, interval);
}

function changeImage() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  imgElement.src = images[index];
}

function previousImage() {
  clearInterval(intervalID);
  if (index == 0) {
    index = images.length - 1;
  } else {
    index--;
  }
  imgElement.src = images[index];
  intervalID = setInterval(changeImage, interval);
}

function nextImage() {
  clearInterval(intervalID);
  changeImage();
  intervalID = setInterval(changeImage, interval);
}

function togglePlay() {
  pause = !pause;
  playIcon.classList.toggle("fa-play");
  playIcon.classList.toggle("fa-pause");
  if (pause) {
    clearInterval(intervalID);
  } else {
    intervalID = setInterval(changeImage, interval);
  }
}

function random() {
  clearInterval(intervalID);
  index = Math.floor(Math.random() * 6);
  imgElement.src = images[index];
  intervalID = setInterval(changeImage, interval);
}

function transitionAdd() {
  imgElement.classList.toggle("fade");
}

function toggleToolbar() {
  document.querySelector("nav").classList.toggle("hide");
}
