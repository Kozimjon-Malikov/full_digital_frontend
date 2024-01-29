const fullScreen = document.querySelector(".full"),
  video = document.querySelector("video"),
  stop = document.querySelector(".stop"),
  forward = document.querySelector(".forward"),
  back = document.querySelector(".back"),
  details = document.querySelectorAll(".details"),
  play = document.querySelector(".play");
fullScreen.addEventListener("click", (e) => {
  e.preventDefault();
  video.requestFullscreen();
});
play.addEventListener("click", (e) => {
  e.preventDefault();
  video.play();
});
stop.addEventListener("click", (e) => {
  e.preventDefault();
  video.pause();
});
forward.addEventListener("click", (e) => {
  e.preventDefault();
  video.currentTime = video.currentTime + (video.duration / 100) * 5;
});

back.addEventListener("click", (e) => {
  e.preventDefault();
  video.currentTime = video.currentTime - (video.duration / 100) * 5;
});

details.forEach((items) => {
  items.insertAdjacentHTML(
    "beforeend",
    `
    <a class='btn__link' href='news.html'>Batafsil...</a>
    `
  );
});

// add dinamic news
