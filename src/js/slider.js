import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

const partnersContainer = document.querySelector('.partners__container');

export const partnersSwiper = new Swiper(partnersContainer, {
  wrapperClass: `partners__wrapper`,
  slideClass: `partners__slide`,
  speed: 600,
  slidesPerView: `auto`,

  navigation: {
    nextEl: '.partners__btn--next',
    prevEl: '.partners__btn--prev',
  },

  // breakpoints: {
  //       1199: {
  //           slidesPerView: 4,
  //           spaceBetween: 30,
  //       },
  //       992: {
  //           slidesPerView: 3,
  //           spaceBetween: 30,
  //       },
  //       768: {
  //           slidesPerView: 2,
  //           spaceBetween: 30,
  //       },
  //       320: {
  //           slidesPerView: 1,
  //           spaceBetween: 30,
  //       }
  //   }
});

console.log(partnersSwiper);