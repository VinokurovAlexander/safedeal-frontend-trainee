export const createFormTemplate = () => {
  return (
    `<form class="modal__form form">
       <input type="text" class="form__input" placeholder="Ваше имя" name="username" required>
       <input type="text" class="form__input" placeholder="Ваш комментарий" name="comment" required>
       <button type="submit" class="form__btn btn">Оставить комментарий</button>
     </form>`
  )
};
