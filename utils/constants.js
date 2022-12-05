export const items = [
    {
      name: 'Колумбия',
      path: './images/img/flowers.jpg'
    },
    {
      name: 'Арканзас',
      path: './images/img/forest.jpg'
    },
    {
      name: 'Кабардино-Балкария',
      path: './images/img/sea.jpg'
    },
    {
      name: 'Турция',
      path: './images/img/cat.jpg'
    },
    {
      name: 'Швейцария',
      path: './images/img/switzerland.jpg'
    },
    {
      name: 'Казань',
      path: './images/img/kazan.jpg'
    }
];

export const cardsContainer = document.querySelector('.cards');
export const cardImgPopup = document.querySelector('.card-img-popup');
export const formList = [...document.querySelectorAll(".popup__form")];
export const formSelectors = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_inactive',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__input_error-message_active'
}
export const popupEditSelector = document.querySelector('.popup');
export const popupEditButton = document.querySelector('.profile-info__edit-button');
export const popupEditUserName = document.querySelector('.profile-info__user-name');
export const popupEditUserNameInput = popupEditSelector.querySelector('.popup__input_name');
export const popupEditUserDescription = document.querySelector('.profile-info__user-description');
export const popupEditUserDescriptionInput = popupEditSelector.querySelector('.popup__input_about');
export const popupEditSubmitButton = popupEditSelector.querySelector('.popup__save-button');
export const popupAddCardSelector = document.querySelector('.card-popup');

export const popupAddCardButton = document.querySelector('.profile-info__add-button');
