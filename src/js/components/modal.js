import AbstractComponent from "./abstract-components";
import {createFormTemplate} from "./form";
import {createCommentsListTemplate} from "./comment";

export default class Modal extends AbstractComponent {
  constructor(image, comments) {
    super();

    this._image = image;
    this._comments = comments;
  }

  getTemplate() {
    const comments = createCommentsListTemplate(this._comments);
    const form = createFormTemplate();

    return (
      `<section class="modal">
         <img class="modal__img" width="320" height="205" src="${this._image.url}" alt="${this._image.description || ''}">
         <div class="container">
           ${comments}
           ${form}
           <button type="button" class="modal__btn close-btn">
             <span class="visually-hidden">Кнопка закрытия окна</span>
           </button>
         </div>
       </section>`
    )
  }
}
