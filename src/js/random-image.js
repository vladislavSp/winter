const images = [...document.querySelectorAll('[data-random="image"]')];
const randomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

if (images.length) {
  let image = images[randomInteger(0, images.length - 1)];
  image.style.display = 'block';
}