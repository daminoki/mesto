const editButton = document.querySelector('.profile-info__edit-button');
const popup = document.querySelector('.popup');
const userName = document.querySelector('.profile-info__user-name');
const userNameInput = document.querySelector('.popup__input_name');
const userDescription = document.querySelector('.profile-info__user-description');
const userDescriptionInput = document.querySelector('.popup__input_about');

function openEditForm() {
    popup.classList.add('popup_opened');
    userNameInput.value = userName.textContent;
    userDescriptionInput.value = userDescription.textContent;
}

editButton.addEventListener('click', openEditForm);

const closeButton = document.querySelector('.popup__close-button');

function closeEditForm () {
    popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closeEditForm);
window.addEventListener('keyup', function (evt) {
    if (evt.key === 'Escape' && popup.classList.contains("popup_opened")) {
        closeEditForm(); 
    }
});

// Находим форму в DOM
let formElement = document.querySelector('.popup__form');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    userName.textContent = userNameInput.value;
    userDescription.textContent = userDescriptionInput.value;
    closeEditForm();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 