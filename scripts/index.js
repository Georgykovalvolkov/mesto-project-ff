
const cardSection = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;


function createCard(cardFilling, deleteCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__title').textContent = cardFilling.name;
    cardElement.querySelector('.card__image').src = cardFilling.link;
    cardElement.querySelector('.card__image').alt = cardFilling.name;

    const cardDeleteButton = cardElement.querySelector('.card__delete-button');
    cardDeleteButton.addEventListener('click', function() {
        deleteCard(cardElement);
    });

    return cardElement;
};

function deleteCard (element) {
    element.remove ();
};

initialCards.forEach((data) => {
  const insertCard = createCard(data, deleteCard);
  cardSection.append(insertCard);
}
);
