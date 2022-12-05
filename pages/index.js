import { 
    items, 
    formList,
    formSelectors
} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';

const cardList = new Section({ items, 
renderer: (item) => {
    const card = new Card(item.name, item.path);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
}
}, '.cards');

cardList.renderItems();

formList.forEach((item) => {
    const formElement = new FormValidator(formSelectors, item);
});




