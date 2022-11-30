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
class Card {
    constructor(data, selector) {
        this._name = data.name;
        this._path = data.path;
        this._selector = selector;
    }

    _getElement() {
        const cardElement = document
        .querySelector('.cards')
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
      //открытие попапа с изображением
      this._element.querySelector('.cards__img').addEventListener('click', () => {
        this._handleImgClick();
      });

      //закрытие попапа с изображением
      this._handleCardClose();

      //лайк
      this._element.querySelector('.cards__like').addEventListener('click', () => {
        this._handleLikeClick();
      })

      //удаление карточки
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
    const card = new Card(item, '.cards');
    const cardElement = card.generateCard();

    cardsContainer.append(cardElement);
});
