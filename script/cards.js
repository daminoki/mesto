const initialCards = [
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

const cardsContainer = document.querySelector('.cards');

const cardItem = (name, imgSrc) => {
  return `
    <div class="cards__item">
      <img class="cards__img" src="${imgSrc}" alt="">
      <div class="cards__description">
        <h3 class="cards__name">${name}</h3>
        <button class="cards__like"></button>
      </div>
      <button class="cards__trash"></button>
    </div>
  `;
};

initialCards.forEach(function (item) {
    cardsContainer.insertAdjacentHTML('beforeend', cardItem(item.name, item.path))
});

const initCardsListener = () => {
  const likeButtonArr = document.querySelectorAll('.cards__like');
  const deleteButtonArr = document.querySelectorAll('.cards__trash');

  likeButtonArr.forEach(function (el) {
    el.addEventListener('click', () => {
      likeAdd(el);
    });
  });

  deleteButtonArr.forEach(function (el) {
    el.addEventListener('click', () => {
      deleteCard(el);
    });
  });
}

initCardsListener();

const addButton = document.querySelector('.profile-info__add-button');
const cardPopup = document.querySelector('.card-popup');
const cardTitleInput = cardPopup.querySelector('.popup__input_name');
const cardImageLinkInput = cardPopup.querySelector('.popup__input_about');

function openAddForm() {
    cardPopup.classList.add('popup_opened');
}

addButton.addEventListener('click', openAddForm);

const closeAddButton = cardPopup.querySelector('.popup__close-button');

function closeAddForm () {
    cardPopup.classList.remove('popup_opened');
    cardTitleInput.value = '';
    cardImageLinkInput.value = '';
}

closeAddButton.addEventListener('click', closeAddForm);

window.addEventListener('keyup', function (evt) {
    if (evt.key === 'Escape' && cardPopup.classList.contains("popup_opened")) {
        closeAddForm(); 
    }
});

let addFormElement = cardPopup.querySelector('.popup__form');

function formSubmitHandler (evt) {
    evt.preventDefault();
    cardsContainer.insertAdjacentHTML('afterbegin', cardItem(cardTitleInput.value, cardImageLinkInput.value)); 
    initCardsListener();
    closeAddForm();
}

addFormElement.addEventListener('submit', formSubmitHandler);

function likeAdd (el) {
  el.classList.toggle('cards__like_active');
};


// удаление картинки

function deleteCard (el) {
  const cardItem = el.closest('.cards__item');
  cardItem.remove();
}