import './pages/index.css';
import {initialCards} from './scripts/cards.js';
import {createCard, deleteCard, likeHandler, newCardSubmit} from './components/card.js';
import {openModal, closeModal, closePopupEsc} from './components/modal.js';


const cardSection = document.querySelector('.places__list');

initialCards.forEach((data) => {
    const insertCard = createCard(data, deleteCard, imageHandler, likeHandler);
    cardSection.append(insertCard);
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
 function imageHandler(cardFilling, evt) {
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;
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
function handleFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closeModal(popupTypeEdit);
}

// Прикрепляем обработчик к форме:
formElement.addEventListener('submit', handleFormSubmit);

// Получаем значения полей формы
const newPlaceForm = document.querySelector('.popup_type_new-card');
const newCardForm = newPlaceForm.querySelector('.popup__form');
const placeNameInput = newPlaceForm.querySelector('.popup__input_type_card-name');
const placeLinkInput = newPlaceForm.querySelector('.popup__input_type_url');

newCardForm.addEventListener('submit', newCardSubmit);

export {placeNameInput, placeLinkInput, imageHandler, cardSection, newCardForm, popupTypeNewCard}; 