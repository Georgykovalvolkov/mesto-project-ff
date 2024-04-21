import './pages/index.css';
import {initialCards} from './scripts/cards.js';
import {createCard, deleteCard, likeHandler} from './components/card.js';
import {openModal, closeModal} from './components/modal.js';


const cardSection = document.querySelector('.places__list');

initialCards.forEach((data) => {
    const insertCard = createCard(data, deleteCard, handleImage, likeHandler);
    cardSection.append(insertCard);
  });

 const allPopups = document.querySelectorAll('.popup');
 allPopups.forEach((item) => {
  item.classList.add('popup_is-animated');
 });
 const profileEditButton = document.querySelector('.profile__edit-button');//получаем кнопку редактирования профиля
 const popupTypeEdit = document.querySelector('.popup_type_edit');//получаем попап редактирования профиля
 const profileCloseButton = popupTypeEdit.querySelector('.popup__close');//получаем кнопку закрытия попапа редактирования профиля

 const profileAddButton = document.querySelector('.profile__add-button');//получаем кнопку добавления карточки
 const popupTypeNewCard = document.querySelector('.popup_type_new-card');//получаем попап добавления карточки
 const newCardcloseButton = popupTypeNewCard.querySelector('.popup__close');//получаем кнопку закрытия попапа добавления карточки

 const popupTypeImage = document.querySelector('.popup_type_image');//получаем попап открытия картинки
 const popupImageCloseButton = popupTypeImage.querySelector('.popup__close');//получаем кнопку закрытия попапа картинки
 const popupImage = popupTypeImage.querySelector('.popup__image');//получаем элемент изображения модального окна
 const popupText = popupTypeImage.querySelector('.popup__caption');//получаем текстовый элемент попапа картинки

 profileEditButton.addEventListener('click', ()=>{openModal(popupTypeEdit)});  //открытие редактирования профиля
 profileCloseButton.addEventListener('click', ()=>{closeModal(popupTypeEdit)}); //закрытие редактирования профиля кликом по крестику

 profileAddButton.addEventListener('click', ()=>{openModal(popupTypeNewCard)});//открытие создания карточки
 newCardcloseButton.addEventListener('click',()=>{closeModal(popupTypeNewCard)});//закрытие создания карточки кликом по крестику

 //функция обработки клика по картинке
 function handleImage(cardFilling) {
    popupImage.src = cardFilling.target.src;
    popupImage.alt = cardFilling.target.alt;
    const imageText = popupImage.alt;
    popupText.textContent = imageText;
    openModal(popupTypeImage);
 }

 popupImageCloseButton.addEventListener('click', ()=>{closeModal(popupTypeImage)});//закрытие попапа картинки кликом по крестику

//редактирование имени и информации о себе
const formElement = popupTypeEdit.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_description');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
nameInput.value = profileTitle.textContent;
jobInput.value = profileDescription.textContent;

// Обработчик «отправки» формы
function profileHandleFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closeModal(popupTypeEdit);
}

// Прикрепляем обработчик к форме:
formElement.addEventListener('submit', profileHandleFormSubmit);

// Получаем значения полей формы
const newPlaceForm = document.querySelector('.popup_type_new-card');
const newCardForm = newPlaceForm.querySelector('.popup__form');
const placeNameInput = newPlaceForm.querySelector('.popup__input_type_card-name');
const placeLinkInput = newPlaceForm.querySelector('.popup__input_type_url');

function submitNewCard(evt) {
  evt.preventDefault();
  const name = placeNameInput.value;
  const link = placeLinkInput.value;

  const newCard = {
    name: name,
    link: link
  };

  const newCardElement = createCard(newCard, deleteCard, handleImage, likeHandler);
  cardSection.prepend(newCardElement);
  newCardForm.reset();
  closeModal(popupTypeNewCard);
}

newCardForm.addEventListener('submit', submitNewCard);

export {placeNameInput, placeLinkInput, handleImage, cardSection, popupTypeNewCard};