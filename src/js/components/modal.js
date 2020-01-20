import AbstractComponent from "./abstract-components";
import {createFormTemplate} from "./form";
import {createCommentsListTemplate} from "./comment";
import {isEscEvent} from "../utils/esc-press";

export default class Modal extends AbstractComponent {
  constructor(image, comments) {
    super();

    this._image = image;
    this._comments = comments;

    this._onEscKeyDown = this._onEscKeyDown.bind(this);
    this.hide = this.hide.bind(this);

    this._subscribeOnEvents();
  }

  getTemplate() {
    const comments = createCommentsListTemplate(this._comments);
    const form = createFormTemplate();

    return (
      `<section class="modal">
          <section class="modal__wrapper">
            <div class="container">
              <img class="modal__img" width="320" height="205" src="${this._image.url}" alt="${this._image.description || ''}">
              ${comments}
              ${form}
              <button type="button" class="modal__btn close-btn">
                <span class="visually-hidden">Кнопка закрытия окна</span>
              </button>
            </div>
          </section>
          <section class="modal__overlay"></section>
       </section>
      `
    )
  }

  _setClickHandler(element, handler) {
    this.getElement().querySelector(element).addEventListener('click', handler);
  }

  _setCloseBtnClickHandler() {
    this._setClickHandler('.modal__btn', () => {
      this.hide();
    });
  }

  _setOverlayClickHandler() {
    this._setClickHandler('.modal__overlay', () => {
      this.hide();
    });
  }

  _onEscKeyDown(evt) {
    isEscEvent(evt, this.hide);
  }

  _setEscKeyDown() {
    document.addEventListener('keydown', this._onEscKeyDown);
  }

  _subscribeOnEvents() {
    this._setOverlayClickHandler();
    this._setCloseBtnClickHandler();
    this._setEscKeyDown();
  }

  setSubmitHandler(handler) {
    this.getElement().addEventListener('submit', handler);
  }
}
