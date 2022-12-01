import { openPopup, closePopup } from './popup.js';
// import { cardItem } from './cardItem.js';
import Card from "./Card.js";

const addButton = document.querySelector('.profile-info__add-button');
const popup = document.querySelector('.card-popup');
const cardTitleInput = popup.querySelector('.popup__input_name');
const cardImageLinkInput = popup.querySelector('.popup__input_about');
const cardsContainer = document.querySelector('.cards');

addButton.addEventListener('click', () => openPopup(popup));

const closeAddButton = popup.querySelector('.popup__close-button');

function closeAddForm () {
    closePopup(popup);
    cardTitleInput.value = '';
    cardImageLinkInput.value = '';
}

closeAddButton.addEventListener('click', () => closeAddForm());

let addFormElement = popup.querySelector('.popup__form');

function formSubmitHandler (evt) {
    evt.preventDefault();
    const card = new Card(cardTitleInput.value, cardImageLinkInput.value);
    const cardElement = card.generateCard();
    cardsContainer.prepend(cardElement);
    closeAddForm();
}

addFormElement.addEventListener('submit', (evt) => formSubmitHandler(evt));