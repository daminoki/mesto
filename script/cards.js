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
      <img class="cards__img" src="${imgSrc}" alt="flowers">
      <div class="cards__description">
        <h3 class="cards__name">${name}</h3>
        <button class="cards__like">
          <svg width="22" height="19" viewBox="0 0 22 19" fill="" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.2991 9.78586C22.567 7.54338 22.567 3.90213 20.2991 1.68186C18.0311 -0.560619 14.3486 -0.560619 12.0806 1.68186L10.9804 2.792L9.88007 1.70406C7.61215 -0.560619 3.92957 -0.560619 1.6841 1.68186C0.583822 2.76979 0 4.21297 0 5.74496C0 7.27695 0.606277 8.72013 1.6841 9.80806L10.9804 19L20.2991 9.78586ZM1.4371 5.74496C1.4371 4.59042 1.8862 3.52469 2.71702 2.72539C3.5703 1.88168 4.67058 1.45983 5.77086 1.45983C6.87114 1.45983 7.97142 1.88168 8.8247 2.72539L10.9804 4.83465L13.136 2.70318C14.8201 1.03798 17.582 1.03798 19.2437 2.70318C20.0521 3.50248 20.5236 4.56821 20.5236 5.72276C20.5236 6.8773 20.0745 7.94303 19.2437 8.74233L10.9804 16.9351L2.71702 8.76453C1.90865 7.94303 1.4371 6.8773 1.4371 5.74496Z" fill=""/>
          </svg>
        </button>
      </div>
    </div>
  `;
};

initialCards.forEach(function (item) {
    cardsContainer.insertAdjacentHTML('beforeend', cardItem(item.name, item.path))
});

const addButton = document.querySelector('.profile-info__add-button');
const cardPopup = document.querySelector('.card-popup');
const cardTitleInput = cardPopup.querySelector('.popup__input_name');
const cardImageLinkInput = cardPopup.querySelector('.popup__input_about');

function openAddForm() {
    console.log(cardPopup);
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
    closeAddForm();
}

addFormElement.addEventListener('submit', formSubmitHandler); 