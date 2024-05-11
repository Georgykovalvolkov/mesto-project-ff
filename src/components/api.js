const config = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-12',
  headers: {
    authorization: '7dffb200-f638-4072-8a44-b6a3c5737d41',
    'Content-Type': 'application/json'
  }
};

//Проверка ответа сервера
const checkServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  // если ошибка, отклоняем промис
  return Promise.reject(`Ошибка: ${res.status}`);
};

//Выгрузка профиля пользователя
export const getUserProfile = () => {
  return fetch (`${config.baseUrl}/users/me`, {
  headers: config.headers
  })
  .then(checkServerResponse)
};

//Выгрузка карточек
export const getAllCards = () => {
  return fetch (`${config.baseUrl}/cards`, {
    headers: config.headers
    })
    .then(checkServerResponse)
  };

//Редактирование данных профиля на сервере
export const patchUserProfile = (name, description) => {
  return fetch (`${config.baseUrl}/users/me`,  {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify ({
      name: `${name}`,
      about: `${description}`,
    }),
  })
  .then (checkServerResponse)
 }

 //Добавление новой карточки
 export const postNewCard = (name, link) => {
  return fetch (`${config.baseUrl}/cards`,  {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify ({
      name: `${name}`,
      link: `${link}`,
    }),
  })
  .then (checkServerResponse)
 }

 //Удаление карточки
 export const deleteCardApi = (id) => {
  return fetch (`${config.baseUrl}/cards/${id}`, {
    method: 'DELETE',
    headers: config.headers,
    })
  .then (checkServerResponse)
  }

//Постановка лайка
export const addLike = (id) => {
  return fetch (`${config.baseUrl}/cards/likes/${id}`, {
  method: 'PUT',
  headers: config.headers,

  })
    .then (checkServerResponse)
}

//Снятие лайка
export const deleteLike = (id) => {
  return fetch (`${config.baseUrl}/cards/likes/${id}`, {
    method: 'DELETE',
    headers: config.headers,
})
    .then (checkServerResponse)
}

//Отправка на сервер нового аватара
export const patchAvatar = (avatar) => {
  return fetch (`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify ({
      avatar: `${avatar}`
    })
  })
    .then (checkServerResponse)
}