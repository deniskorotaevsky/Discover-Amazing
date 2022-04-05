const burgerNode = document.querySelector('.js-header-burger');
const header_menu = document.querySelector('.js-header_menu');
const back = document.querySelector('body');
const header__list = document.querySelector('.js-header__item');

burgerNode.onclick = function () {
    burgerNode.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
}

header__list.onclick = function () {
    header__list.classList.remove('active');
    back.classList.toggle('lock');
}

const videoWrapper = document.querySelector(".js-wrapper");
const video = document.querySelector(".js-video__item");
const playButton = document.querySelector(".js-play");

videoWrapper.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        playButton.classList.add('play__paused')
    } else {
        video.pause();
        playButton.classList.remove('play__paused');
    }
});