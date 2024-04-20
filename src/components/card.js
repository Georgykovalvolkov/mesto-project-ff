import {placeNameInput, placeLinkInput, imageHandler, cardSection, newCardForm, popupTypeNewCard} from '../index.js';
import {closeModal} from './modal.js';

const cardTemplate = document.querySelector('#card-template').content;

function createCard(cardFilling, deleteCard, imageHandler, likeHandler) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    cardElement.querySelector('.card__title').textContent = cardFilling.name;
    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = cardFilling.link;
    cardImage.alt = cardFilling.name;

    const cardDeleteButton = cardElement.querySelector('.card__delete-button');
    const cardLikeButton = cardElement.querySelector('.card__like-button');
    
    cardDeleteButton.addEventListener('click', function() {
        deleteCard(cardElement);
    });
    
    cardImage.addEventListener('click', (evt)=>{imageHandler(cardFilling, evt)});
    
    cardLikeButton.addEventListener('click', likeHandler);

    return cardElement;
};

function deleteCard (element) {
    element.remove ();
};//функиця удаления карточки

function likeHandler (event) {
    event.target.classList.toggle('card__like-button_is-active');
}; //функция лайка карточки

function newCardSubmit(evt) {
    evt.preventDefault(); 
    const name = placeNameInput.value;
    const link = placeLinkInput.value;
    
    const newCard = {
      name: name,
      link: link
    };
    
    const newCardElement = createCard(newCard, deleteCard, imageHandler, likeHandler);
    cardSection.prepend(newCardElement);
    newCardForm.reset();
    closeModal(popupTypeNewCard);
  }

export {createCard, deleteCard, likeHandler, newCardSubmit};
