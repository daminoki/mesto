import { openPopup, closePopup } from './popup.js';

const popup = document.querySelector('.card-img-popup');
const cardImg = document.querySelector('.cards__img');
const cardName = document.querySelector('.cards__name');

export function openCardShowPopup () {
    openPopup(popup);
    cardImgOpen.src = cardImg.src;
    cardTitle.textContent = cardName.textContent;
};

const closeButton = document.querySelector('.card-img-popup__close-button');
  
closeButton.addEventListener('click', () => closePopup(popup));
