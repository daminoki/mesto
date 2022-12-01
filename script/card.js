const cardsContainer = document.querySelector('.cards');
const cardImgPopup = document.querySelector('.card-img-popup');

const cardList = [
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

export default class Card {
    constructor(name, path) {
        this._name = name;
        this._path = path;
        this._element = null;
    }

    _getElement() {
        const cardElement = document
          .querySelector('.card-template')
          .content
          .querySelector('.cards__item')
          .cloneNode(true);

        return cardElement;
    }

    generateCard() {
        this._element = this._getElement();
        this._setEventListeners();

        this._element.querySelector('.cards__img').src = this._path;
        this._element.querySelector('.cards__name').textContent = this._name;

        return this._element;
    }

    _setEventListeners() {
      this._element.querySelector('.cards__img').addEventListener('click', () => {
        this._handleImgClick();
      });

      this._handleCardClose();

      this._element.addEventListener('click', (evt) => {
        if(evt.target.classList.contains('cards__like')) {
          this._handleLikeClick(evt.target);
        }
      })

      this._element.querySelector('.cards__trash').addEventListener('click', () => {
        this._handleRemoveCard();
      })
    }

    _handleImgClick() {
      cardImgPopup.classList.toggle('popup_opened');
      cardImgPopup.querySelector('.card-img-popup__img').src = this._path;
      cardImgPopup.querySelector('.card-img-popup__title').textContent = this._name;
    }

    _handleCardClose() {
      cardImgPopup.querySelector('.card-img-popup__close-button').addEventListener('click', () => {
        cardImgPopup.classList.remove('popup_opened');
      })
    }

    _handleLikeClick() {
      this._element.querySelector('.cards__like').classList.toggle('cards__like_active');
    }

    _handleRemoveCard() {
      this._element.remove();
    }
}

cardList.forEach((item) => {
    const card = new Card(item.name, item.path);
    const cardElement = card.generateCard();

    cardsContainer.append(cardElement);
});
