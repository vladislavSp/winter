import { gsap } from '../js/gsap.min.js';

const btnsFaq = [...document.querySelectorAll('.faq__btn')];
const popup = document.querySelector('.popup');
const closeBtns = [...document.querySelectorAll('[data-close="popup"]')];
const insertNum = document.querySelector('[data-insert="num"]');
const insertText = document.querySelector('[data-insert="text"]');
const ESC_CODE = 27;

if (btnsFaq.length) btnsFaq.forEach(btn => btn.addEventListener('click', statePopupHandler));
if (closeBtns.length) closeBtns.forEach(btn => btn.addEventListener('click', closePopup));

function statePopupHandler() {
  document.body.style.overflowY = 'hidden';
  popup.style.display = 'flex';
  popup.style.opacity = 0;


  insertNum.textContent = this.dataset.faq;
  insertText.innerHTML = this.dataset.answer;

  gsap.to(popup, 0.3, {
    opacity: 1,
    ease: Power2.easeOut,
  });

  popup.addEventListener('click', clickPopupHandler);
  document.addEventListener('keydown', buttonCloseHandler);

  function clickPopupHandler(evt) {
    if (evt.target === this) {
      closePopup();
    }
  }

  function buttonCloseHandler(evt) {
    if (evt.keyCode === ESC_CODE) {
      closePopup();
    }
  }
}

function closePopup() {
  document.body.style.overflowY = '';

  gsap.to(popup, 0.3, {
    opacity: 0,
    onComplete() {
      popup.style.display = '';
    }
  });
}