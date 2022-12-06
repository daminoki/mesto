export const items = [
    {
      name: 'Пикник',
      path: "https://images.unsplash.com/photo-1657299143363-621ba0a1e6ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1416&q=80"
    },
    {
      name: 'Горы',
      path: 'https://images.unsplash.com/photo-1669985390012-f369147f7790?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
    },
    {
      name: 'Домашняя кошка',
      path: 'https://images.unsplash.com/photo-1668062284724-4c71542971f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
    },
    {
      name: 'Дикий медведь',
      path: 'https://images.unsplash.com/photo-1670140274562-2496ccaa5271?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
    },
    {
      name: 'Торт',
      path: 'https://images.unsplash.com/photo-1669926504091-2735b6cb51a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
    },
    {
      name: 'Австрия',
      path: 'https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'
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
