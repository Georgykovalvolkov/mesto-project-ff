const cardTemplate = document.querySelector('#card-template').content;

function createCard(cardFilling, deleteCard, handleImage, likeHandler) {
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

    cardImage.addEventListener('click', (cardFilling)=>{handleImage(cardFilling)});

    cardLikeButton.addEventListener('click', likeHandler);

    return cardElement;
};

function deleteCard (element) {
    element.remove ();
};//функиця удаления карточки

function likeHandler (event) {
    event.target.classList.toggle('card__like-button_is-active');
}; //функция лайка карточки


export {createCard, deleteCard, likeHandler};
