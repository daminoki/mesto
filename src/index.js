import './styles/style.css';
import {
    items,
    formList,
    formSelectors,
    popupEditButton,
    popupEditSelector,
    popupEditUserName,
    popupEditUserDescription,
    popupAddCardSelector,
    popupAddCardButton,
    cardsContainer
} from './utils/constants.js';
import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import PopupWithForm from "./components/PopupWithForm.js";

const cardList = new Section(
    {
        items,
        renderer: (item) => {
            const card = new Card(item.name, item.path);
            const cardElement = card.generateCard();
            cardList.addItem(cardElement);
        }
    },
    '.cards'
);

cardList.renderItems();

formList.forEach((item) => {
    new FormValidator(formSelectors, item);
});

function handleEditUserFormSubmit({ userName, userAbout }) {
    popupEditUserName.textContent = userName;
    popupEditUserDescription.textContent = userAbout;
}

const popupEditUser = new PopupWithForm(popupEditSelector, handleEditUserFormSubmit);
popupEditButton.addEventListener("click", () => {
    popupEditUser.openPopup();
})

popupEditUser.setEventListeners();

function handleAddCardFormSubmit({ userName, userAbout }) {
    const card = new Card(userName, userAbout);
    const cardElement = card.generateCard();
    cardsContainer.prepend(cardElement);
}

const popupAddCard = new PopupWithForm(popupAddCardSelector, handleAddCardFormSubmit);
popupAddCardButton.addEventListener("click", () => {
    popupAddCard.openPopup();
})
popupAddCard.setEventListeners();
