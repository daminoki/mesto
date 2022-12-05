import Popup from './Popup';
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popupElement.querySelector('.card-img-popup__img');
        this._popupTitle = this._popupElement.querySelector('.card-img-popup__title');
    }

    openPopup(items) {
        this._popupElement.classList.add('popup_opened');
        this._popupImage.src = items.path;
        this._popupTitle.textContent = items.name;
    }
}