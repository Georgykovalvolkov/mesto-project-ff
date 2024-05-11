import {deleteCardApi, addLike, deleteLike} from './api'

const cardTemplate = document.querySelector('#card-template').content;


const likeCard = (cardFilling, likeNumber, LikeButton) => {
  if (LikeButton.classList.contains('card__like-button_is-active')) {
    deleteLike(cardFilling)
    .then((cardFilling) =>{
      likeNumber.textContent = cardFilling.likes.length;
      LikeButton.classList.remove('card__like-button_is-active');
    })
    .catch((err) => {
      console.log(err);
    });
  } else {
    addLike(cardFilling)
      .then((cardFilling) => {
        likeNumber.textContent = cardFilling.likes.length;
        LikeButton.classList.add('card__like-button_is-active');
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

function createCard(cardFilling, profile, deleteCard, handleImage, likeCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__title').textContent = cardFilling.name;
    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = cardFilling.link;
    cardImage.alt = cardFilling.name;


    const cardDeleteButton = cardElement.querySelector('.card__delete-button');
    const cardLikeButton = cardElement.querySelector('.card__like-button');
    const likeNumber = cardElement.querySelector('.card__like-number');
    const isLiked = cardFilling.likes.some((like) => profile === like._id);
    likeNumber.textContent = cardFilling.likes.length;
    const cardId = cardFilling._id;

    if (isLiked) {
      cardLikeButton.classList.add('card__like-button_is-active');
    } else {
      cardLikeButton.classList.remove('card__like-button_is-active');
    }

    cardLikeButton.addEventListener('click', () => {
      likeCard(cardId, likeNumber, cardLikeButton);
    });


    if (cardFilling.owner['_id'] !== profile['_id']) {
      cardDeleteButton.style.display = "none";
    }
    else {
          deleteCard(cardElement)
          cardDeleteButton.addEventListener('click', () => {
        deleteCardApi(cardId)
        .then(() =>{
          deleteCard(cardElement)
        })
        .catch ((err) => {
          console.log(err)
        })
    })
    }
    cardImage.addEventListener('click', (cardFilling)=>{handleImage(cardFilling)});

    return cardElement;
};

function deleteCard (element) {
    element.remove ();
};//функция удаления карточки

export {createCard, deleteCard, likeCard};
