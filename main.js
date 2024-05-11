(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-12",headers:{authorization:"7dffb200-f638-4072-8a44-b6a3c5737d41","Content-Type":"application/json"}},t=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},n=document.querySelector("#card-template").content,r=function(n,r,o){var c;o.classList.contains("card__like-button_is-active")?(c=n,fetch("".concat(e.baseUrl,"/cards/likes/").concat(c),{method:"DELETE",headers:e.headers}).then(t)).then((function(e){r.textContent=e.likes.length,o.classList.remove("card__like-button_is-active")})).catch((function(e){console.log(e)})):function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then(t)}(n).then((function(e){r.textContent=e.likes.length,o.classList.add("card__like-button_is-active")})).catch((function(e){console.log(e)}))};function o(r,o,c,a,u){var i=n.querySelector(".card").cloneNode(!0);i.querySelector(".card__title").textContent=r.name;var l=i.querySelector(".card__image");l.src=r.link,l.alt=r.name;var s=i.querySelector(".card__delete-button"),d=i.querySelector(".card__like-button"),p=i.querySelector(".card__like-number"),f=r.likes.some((function(e){return o._id===e._id}));p.textContent=r.likes.length;var _=r._id;return f?d.classList.add("card__like-button_is-active"):d.classList.remove("card__like-button_is-active"),d.addEventListener("click",(function(){u(_,p,d)})),r.owner._id!==o._id?s.style.display="none":(c(i),s.addEventListener("click",(function(){var n;(n=_,fetch("".concat(e.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:e.headers}).then(t)).then((function(){c(i)})).catch((function(e){console.log(e)}))}))),l.addEventListener("click",(function(e){a(e)})),i}function c(e){e.remove()}function a(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",i)}function u(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",i)}function i(e){"Escape"===e.key&&u(document.querySelector(".popup_is-opened"))}document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("click",(function(t){t.target.classList.contains("popup")&&u(e)}))}));var l=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},s=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))},d=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){l(e,n,t)})),s(n,r,t)};function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function _(e,t){t.textContent=e?"Сохранение...":"Сохранить"}!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);s(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?l(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),s(n,r,t)}))}))}(t,e)}))}(f);var y=document.querySelector(".places__list"),v=document.querySelector(".profile__image");Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t)]).then((function(e){var t,n,a=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=a[0],i=a[1];M.textContent=u.name,N.textContent=u.about,v.style.backgroundImage="url(".concat(u.avatar,")"),i.forEach((function(e){var t=o(e,u,c,B,r);y.append(t)}))})).catch((function(e){console.log(e)})),document.querySelectorAll(".popup").forEach((function(e){e.classList.add("popup_is-animated")}));var m=document.querySelector(".profile__edit-button"),h=document.querySelector(".popup_type_edit"),S=h.querySelector(".popup__close"),b=document.forms["edit-avatar"],q=document.querySelector(".popup_type_avatar"),E=q.querySelector(".popup__close"),L=q.querySelector(".popup__input_type_url"),g=document.querySelector(".profile__add-button"),k=document.querySelector(".popup_type_new-card"),C=k.querySelector(".popup__close"),x=document.querySelector(".popup_type_image"),A=x.querySelector(".popup__close"),w=x.querySelector(".popup__image"),U=x.querySelector(".popup__caption"),j=document.querySelector(".profile__popup-save-button"),O=document.querySelector(".new__card-popup-button"),T=document.querySelector(".avatar__popup-button");function B(e){w.src=e.target.src,w.alt=e.target.alt;var t=w.alt;U.textContent=t,a(x)}v.addEventListener("click",(function(){a(q),d(q,f)})),q.addEventListener("submit",(function(n){var r;n.preventDefault(),_(!0,T),(r=L.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:"".concat(r)})}).then(t)).then((function(e){v.style.backgroundImage="url(".concat(e.avatar,")"),u(q),b.reset()})).catch((function(e){console.log(e)})).finally((function(){_(!1,T)}))})),E.addEventListener("click",(function(){u(q)})),m.addEventListener("click",(function(){a(h),d(h,f),D.value=M.textContent,I.value=N.textContent})),S.addEventListener("click",(function(){u(h)})),g.addEventListener("click",(function(){a(k),d(k,f)})),C.addEventListener("click",(function(){u(k)})),A.addEventListener("click",(function(){u(x)}));var P=h.querySelector(".popup__form"),D=P.querySelector(".popup__input_type_name"),I=P.querySelector(".popup__input_type_description"),M=document.querySelector(".profile__title"),N=document.querySelector(".profile__description");D.value=M.textContent,I.value=N.textContent,P.addEventListener("submit",(function(n){var r,o;n.preventDefault(),_(!0,j),(r=D.value,o=I.value,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:"".concat(r),about:"".concat(o)})}).then(t)).then((function(e){M.textContent=e.name,N.textContent=e.about,u(h)})).catch((function(e){console.log(e)})).finally((function(){_(!1,j)}))}));var J=document.querySelector(".popup_type_new-card"),H=J.querySelector(".popup__form"),V=J.querySelector(".popup__input_type_card-name"),z=J.querySelector(".popup__input_type_url");H.addEventListener("submit",(function(n){var a,i;n.preventDefault(),_(!0,O),(a=V.value,i=z.value,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:"".concat(a),link:"".concat(i)})}).then(t)).then((function(e){var t=o(e,e.owner,c,B,r);y.prepend(t),H.reset(),u(k)})).catch((function(e){console.log(e)})).finally((function(){_(!1,O)}))}))})();
//# sourceMappingURL=main.js.map