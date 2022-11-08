const cardImgPopup = document.querySelector('.card-img-popup');
const cardImgOpen = document.querySelector('.card-img-popup__img');
const cardTitle = document.querySelector('.card-img-popup__title');
const cardImg = document.querySelector('.cards__img');
const cardName = document.querySelector('.cards__name');

function openCardImgPopup () {
    cardImgPopup.classList.add('popup_opened');
    cardImgOpen.src = cardImg.src;
    cardTitle.textContent = cardName.textContent;
};

cardsContainer.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('cards__img')) {
        openCardImgPopup(evt.target);
    };
  });

  const cardImagePopupCloseButton = document.querySelector('.card-img-popup__close-button');

  function closeCardImgPopupForm () {
    cardImgPopup.classList.remove('popup_opened');
  }
  
  cardImagePopupCloseButton.addEventListener('click', closeCardImgPopupForm);

  window.addEventListener('keyup', function (evt) {
      if (evt.key === 'Escape' && cardImgPopup.classList.contains("popup_opened")) {
          closeCardImgPopupForm(); 
      }
  });
