import { openCardShowPopup } from "./popupCardShow.js";
import { likeToggle, deleteCard } from "./cardActions.js";
import { closePopup } from "./popup.js";

const cardsContainer = document.querySelector('.cards');
const editPopupForm = document.querySelector('.popup');
const addCardPopupForm = document.querySelector('.card-popup');
const openImgPopupForm = document.querySelector('.card-img-popup');

cardsContainer.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('cards__like')) {
    likeToggle(evt.target);
  };

  if (evt.target.classList.contains('cards__trash')) {
    deleteCard(evt.target);
  };

  if (evt.target.classList.contains('cards__img')) {
    openCardShowPopup(evt.target);
  };
});

editPopupForm.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  };
});

addCardPopupForm.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('card-popup')) {
    closePopup(evt.target);
  };
});

openImgPopupForm.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('card-img-popup')) {
    closePopup(evt.target);
  };
});

window.addEventListener('keyup', function(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
});