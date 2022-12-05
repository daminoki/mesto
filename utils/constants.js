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
export const popupEditUserFormSelector = document.querySelector('.popup');
export const editUserFormEditButton = document.querySelector('.profile-info__edit-button');
export const editUserFormUserName = document.querySelector('.profile-info__user-name');
export const editUserFormUserNameInput = popupEditUserFormSelector.querySelector('.popup__input_name');
export const editUserFormUserDescription = document.querySelector('.profile-info__user-description');
export const editUserFormUserDescriptionInput = popupEditUserFormSelector.querySelector('.popup__input_about');
export const editUserFormSaveButton = popupEditUserFormSelector.querySelector('.popup__save-button');
