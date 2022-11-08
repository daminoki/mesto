import { openCardShowPopup } from "./popupCardShow.js";
import { likeToggle, deleteCard } from "./cardActions.js";
import { closePopup } from "./popup.js";

const cardsContainer = document.querySelector('.cards');

cardsContainer.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('cards__like')) {
    likeToggle(evt.target);
  };

  if (evt.target.classList.contains('cards__trash')) {
    deleteCard(evt.target);
  }

  if (evt.target.classList.contains('cards__img')) {
    openCardShowPopup();
  }
});

window.addEventListener('keyup', function(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
});