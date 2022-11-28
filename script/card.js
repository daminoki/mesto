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
    constructor(data, templateSelector) {
        this.name = data.name;
        this.path = data.path;
        this.templateSelector = templateSelector;
    }

    _getElement() {
        const cardElement = document
        .querySelector(this.templateSelector)
        .content
        .cloneNode(true);

        return cardElement;
    }

}