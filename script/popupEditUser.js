import { openPopup, closePopup } from './popup.js';


const editButton = document.querySelector('.profile-info__edit-button');
const popup = document.querySelector('.popup');
const userName = document.querySelector('.profile-info__user-name');
const userNameInput = popup.querySelector('.popup__input_name');
const userDescription = document.querySelector('.profile-info__user-description');
const userDescriptionInput = popup.querySelector('.popup__input_about');
const saveButton = popup.querySelector('.popup__save-button');

function openEditForm() {
    openPopup(popup);
    userNameInput.value = userName.textContent;
    userDescriptionInput.value = userDescription.textContent;
}

editButton.addEventListener('click', () => openEditForm());

const closeButton = document.querySelector('.popup__close-button');

closeButton.addEventListener('click', () => closePopup(popup));

let formElement = document.querySelector('.popup__form');

function formSubmitHandler (evt) {
    evt.preventDefault();
    if (saveButton.disabled) return;

    userName.textContent = userNameInput.value;
    userDescription.textContent = userDescriptionInput.value;
    closePopup(popup);
}

formElement.addEventListener('submit', (evt) => formSubmitHandler(evt)); 