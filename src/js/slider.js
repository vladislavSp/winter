import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

let gallerySwiper;
const partnersContainer = document.querySelector('.partners__container');
const galleryCont = document.querySelector('.gallery__container');

if (partnersContainer) {
  const partnersSwiper = new Swiper(partnersContainer, {
    wrapperClass: `partners__wrapper`,
    slideClass: `partners__slide`,
    speed: 600,
    slidesPerView: `auto`,

    navigation: {
      nextEl: '.partners__btn--next',
      prevEl: '.partners__btn--prev',
    },
  });
}

if (galleryCont) {
  if (window.matchMedia("(max-width: 991px)").matches) {
    gallerySwiper = new Swiper(galleryCont, {
      wrapperClass: `gallery__wrapper`,
      slideClass: `gallery__slide`,
      speed: 600,
      slidesPerView: 1,
      loop: true,
      allowTouchMove: true,

      navigation: {
        nextEl: '.gallery__btn--next',
        prevEl: '.gallery__btn--prev',
      },

      breakpoints: {
        991: {
          slidesPerView: 3,
          allowTouchMove: false,
        },
        768: {
          slidesPerView: 2,
          allowTouchMove: true,
        },
        320: {
          slidesPerView: 1,
          allowTouchMove: true,
        },
      }
    });
  } else {
    if (gallerySwiper) {
      gallerySwiper.destroy();
    }
  }
}
