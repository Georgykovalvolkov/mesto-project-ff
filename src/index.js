import './pages/index.css';
//import {initialCards} from './scripts/cards.js';
import {createCard, deleteCard, likeCard} from './components/card.js';
import {openModal, closeModal} from './components/modal.js';
import {enableValidation, clearValidation} from './components/validation.js';
import {getUserProfile, getAllCards, patchUserProfile, postNewCard, patchAvatar} from './components/api.js';

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const buttonText = 'Сохранить';
const buttonTextLoading = 'Сохранение...';

function renderLoading (isLoading, button) {
  if (isLoading) {
    button.textContent = buttonTextLoading;
  }
  else {
    button.textContent = buttonText;
  }
}

enableValidation(validationConfig);

const cardSection = document.querySelector('.places__list');
const avatarImage = document.querySelector(".profile__image");

//Получение данных профиля пользователя и карточек с сервера
Promise.all([getUserProfile(), getAllCards()])
.then(([profile, initialCards]) => {
  profileTitle.textContent = profile.name;
  profileDescription.textContent = profile.about;
  avatarImage.style.backgroundImage = `url(${profile.avatar})`

  initialCards.forEach((data) => {
    const insertCard = createCard(data, profile, deleteCard, handleImage, likeCard);
    cardSection.append(insertCard);
  });
})
.catch((err) => {
  console.log(err);
});

 const allPopups = document.querySelectorAll('.popup');
 allPopups.forEach((item) => {
  item.classList.add('popup_is-animated');
 });
 const profileEditButton = document.querySelector('.profile__edit-button');//получаем кнопку редактирования профиля
 const popupTypeEdit = document.querySelector('.popup_type_edit');//получаем попап редактирования профиля
 const profileCloseButton = popupTypeEdit.querySelector('.popup__close');//получаем кнопку закрытия попапа редактирования профиля

 const avatarFormElement = document.forms['edit-avatar'];
 const popupTypeAvatar = document.querySelector('.popup_type_avatar');
 const avatarCloseButton = popupTypeAvatar.querySelector('.popup__close');
 const avatarUrl = popupTypeAvatar.querySelector('.popup__input_type_url');

 const profileAddButton = document.querySelector('.profile__add-button');//получаем кнопку добавления карточки
 const popupTypeNewCard = document.querySelector('.popup_type_new-card');//получаем попап добавления карточки
 const newCardcloseButton = popupTypeNewCard.querySelector('.popup__close');//получаем кнопку закрытия попапа добавления карточки

 const popupTypeImage = document.querySelector('.popup_type_image');//получаем попап открытия картинки
 const popupImageCloseButton = popupTypeImage.querySelector('.popup__close');//получаем кнопку закрытия попапа картинки
 const popupImage = popupTypeImage.querySelector('.popup__image');//получаем элемент изображения модального окна
 const popupText = popupTypeImage.querySelector('.popup__caption');//получаем текстовый элемент попапа картинки

 const profileSaveButton = document.querySelector('.profile__popup-save-button');
 const newCardSaveButton = document.querySelector('.new__card-popup-button');
 const avatarSaveButton = document.querySelector('.avatar__popup-button');

 avatarImage.addEventListener('click', () => {openModal(popupTypeAvatar)
   clearValidation(popupTypeAvatar, validationConfig)
})

 function avatarHandleSubmit (evt) {
  evt.preventDefault();
  renderLoading(true, avatarSaveButton)
  patchAvatar(avatarUrl.value)
  .then((profile) => { avatarImage.style.backgroundImage = `url(${profile.avatar})`;
  closeModal(popupTypeAvatar);
  avatarFormElement.reset();
  })
  .catch ((err) => {
    console.log(err)})
  .finally(() => {
    renderLoading(false, avatarSaveButton)});
 };

 popupTypeAvatar.addEventListener('submit', avatarHandleSubmit);
 avatarCloseButton.addEventListener('click', ()=>{closeModal(popupTypeAvatar)})

 profileEditButton.addEventListener('click', ()=>{openModal(popupTypeEdit);
  clearValidation(popupTypeEdit, validationConfig);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;});  //открытие редактирования профиля
 profileCloseButton.addEventListener('click', ()=>{closeModal(popupTypeEdit)}); //закрытие редактирования профиля кликом по крестику

 profileAddButton.addEventListener('click', ()=>{openModal(popupTypeNewCard);
  clearValidation(popupTypeNewCard, validationConfig);
 });//открытие создания карточки
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

function profileHandleFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(true, profileSaveButton)
  patchUserProfile(nameInput.value, jobInput.value)
  .then ((profile) => {
    profileTitle.textContent = profile.name;
    profileDescription.textContent = profile.about;
    closeModal(popupTypeEdit);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(false, profileSaveButton)});
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
  renderLoading(true, newCardSaveButton)
  const name = placeNameInput.value;
  const link = placeLinkInput.value;
  postNewCard(name, link)
.then ((newCard) => {
  const newCardElement = createCard(newCard, newCard.owner, deleteCard, handleImage, likeCard);
  cardSection.prepend(newCardElement);
  newCardForm.reset();
  closeModal(popupTypeNewCard);
})
.catch((err) => {
  console.log(err);
})
.finally(() => {
  renderLoading(false, newCardSaveButton)})
}

newCardForm.addEventListener('submit', submitNewCard);

export {placeNameInput, placeLinkInput, handleImage, cardSection, popupTypeNewCard};