// swiper
var swiper = new Swiper(".comments__slider", {
  slidesPerView: "auto",
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
