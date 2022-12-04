export default class Popup {
    constructor(popupSelector) {
        this._popupElement = popupSelector;
    }

    openPopup() {
        this._popupElement.classList.add('popup_opened');
    }

    closePopup() {
        this._popupElement.classList.add('popup_opened');
    }

    _handleEscClose(e) {
        if (e.key === 'Escape') {
          this.closePopup();
        }
    }

    setEventListeners() {
        this._popupElement.querySelector('.popup__close-button').addEventListener('click', () => {
            this.closePopup();
        })
    }
}