export function likeToggle (el) {
    el.classList.toggle('cards__like_active');
};
  
export function deleteCard (el) {
    const cardItem = el.closest('.cards__item');
    cardItem.remove();
}