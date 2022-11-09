import { openPopup, closePopup } from './popup.js';

const popup = document.querySelector('.card-img-popup');
const cardImgOpen = popup.querySelector('.card-img-popup__img');
const cardTitle = popup.querySelector('.card-img-popup__title');

export function openCardShowPopup (img) {
    const cardItem = img.closest('.cards__item');
    const cardName = cardItem.querySelector('.cards__name');
    openPopup(popup);
    cardImgOpen.src = img.src;
    cardTitle.textContent = cardName.textContent;
};

const closeButton = document.querySelector('.card-img-popup__close-button');
  
closeButton.addEventListener('click', () => closePopup(popup));