export default class Popup {
    constructor(popupSelector) {
        this._popupElement = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this)
    }

    openPopup() {
        this._popupElement.classList.add('popup_opened');
    }

    closePopup() {
        this._popupElement.classList.remove('popup_opened');
    }

    _handleEscClose(e) {
        if (e.key === 'Escape') {
          this.closePopup();
        }
    }
    _handleOverlayClose(e) {
        if (e.target.classList.contains('popup_opened')) {
            this.closePopup()
        }
    }
    setEventListeners() {
        this._popupElement.querySelector('.popup__close-button').addEventListener('click', () => {
            this.closePopup();
        })
    }
}