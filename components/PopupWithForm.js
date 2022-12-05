import Popup from './Popup';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallback) {
        super(popupSelector);
        this._sumbitCallback = submitCallback;

        this._popupForm = document.querySelector('.popup__form');
        this._inputList = this._popupForm.querySelectorAll('.popup__input');
        this._saveButton = this._popupForm.querySelector('.popup__save-button');
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
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._sumbitCallback(this._getInputValues());
        })
    }

    closePopup() {
        super.closePopup();
        this._popupForm.reset();
    }
}