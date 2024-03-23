
const cardSection = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;


function createCard(cardFilling, cardDeleting) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__title').textContent = cardFilling.name;
    cardElement.querySelector('.card__image').src = cardFilling.link;

    const cardDeleteButton = cardElement.querySelector('.card__delete-button');
    cardDeleteButton.addEventListener('click', function() {
        cardDeleting(cardElement);
    });

    return cardElement;
};

function cardDeleting (element) {
    element.remove ();
};

initialCards.forEach((data) => {
  const insertCard = createCard(data, cardDeleting);
  cardSection.append(insertCard);
}
);
