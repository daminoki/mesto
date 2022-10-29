const editButton = document.querySelector('.profile-info__edit-button');

function openEditForm() {
    let popup = document.querySelector('.popup');
    popup.classList.add('popup_opened');
}

editButton.addEventListener('click', openEditForm);

const closeButton = document.querySelector('.popup__close-button');

function closeEditForm () {
    let popup = document.querySelector('.popup');
    popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closeEditForm);