const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

const swiper = new Swiper(".swiper", {
  // slidesPerView: 3,
  // freeMode: true,
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
    },
  },
  speed: 1000,
  direction: "horizontal",
  lazyPreloadPrevNext: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
