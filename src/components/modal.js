function openModal (popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', closePopupEsc);
 }//функция открытия попапа

 function closeModal (popup) {
    popup.classList.remove('popup_is-opened');
    popup.classList.add('popup_is-animated');
    document.removeEventListener('keydown',closePopupEsc);
 }//функция закрытия попапа

//закрытие модального окна по Esc
function closePopupEsc(evt) {
   if(evt.key === 'Escape') {
       const popup = document.querySelector('.popup_is-opened');
       closeModal(popup);
   }
};

 //закрытие попапа кликом на оверлей
 const popups = document.querySelectorAll('.popup');
 popups.forEach((popup)=> {popup.addEventListener('click', (evt)=>{
    if (evt.target.classList.contains('popup')) {
        closeModal(popup);
    }
 })});


export {openModal, closeModal, closePopupEsc};