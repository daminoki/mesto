const editButton = document.querySelector('.profile-info__edit-button');

function openEditForm() {
    let popup = document.querySelector('.popup');
    popup.classList.add('popup_opened');
}

editButton.addEventListener('click', openEditForm);