const btnsCopy = Array.from(document.querySelectorAll('.btn--promo'));
const popup = document.querySelector('.popup');

const copyText = (evt) => {
  evt.preventDefault();
  const target = evt.currentTarget;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(`${target.value}`)
    .then((text) => {
      popup.classList.add('popup--vis');
      popup.addEventListener('transitionend', popupHidden);
    })
    .catch(err => console.log(err));
  } else {
    alert('Ваш браузер не поддерживает функцию быстрого копирования содержимого, скопируйте промокод вручную' + target.value);
  }

  function popupHidden() {
    setTimeout(() => {
      popup.classList.remove('popup--vis');
      popup.removeEventListener('transitionend', popupHidden);
    }, 1000);
  }
}

if (btnsCopy.length) btnsCopy.forEach(btn => btn.addEventListener('click', copyText));
