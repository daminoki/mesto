import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._inputList = this._popupElement.querySelectorAll('.popup__input');
        this._popupForm = document.querySelectorAll('.popup__form');
        this._submitButton = this._popupElement.querySelector('.popup__save-button');
    }

    _getInputValues() {
        this._newValues = {};
        this._inputList.forEach((inputElement) => {
            this._newValues[inputElement.name] = inputElement.value;
        })
        return this._newValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.closePopup();
        })
    }

    closePopup() {
        super.closePopup();
        this._popupForm.forEach((form) => {
            form.reset();
        })
    }
}