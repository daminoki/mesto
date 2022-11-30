const cardsContainer = document.querySelector('.cards');
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

        this._element.querySelector('.cards__img').src = this._path;
        this._element.querySelector('.cards__name').textContent = this._name;
        console.log(this._element);

        return this._element;
    }
}

cardList.forEach((item) => {
    const card = new Card(item, '.cards');
    const cardElement = card.generateCard();

    cardsContainer.append(cardElement);
});
