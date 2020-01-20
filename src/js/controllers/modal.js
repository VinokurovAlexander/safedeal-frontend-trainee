import {render, RenderPosition} from "../utils/render";
import Modal from "../components/modal";

const SHAKE_ANIMATION_TIMEOUT = 600;

export default class ModalController {
  constructor(container, model, api) {
    this._container = container;

    this._isRender = false;
    this._modalComponent = null;
    this._modalModel = model;
    this._api = api;
  }

  _render() {
    const image = this._modalModel.getImage();

    this._modalComponent = new Modal(image, image.comments);
    render(this._container, this._modalComponent, RenderPosition.BEFOREEND);
    this._isRender = true;

    this._modalComponent.setSubmitHandler((evt) => {
      evt.preventDefault();

      const data = {
        'comment': evt.target.querySelector('input[name = comment]').value,
        'name':  evt.target.querySelector('input[name = username]').value
      };
      this._api.addComment(image.id, data)
        .then(() => this.hide())
        .catch(() => this._shake());
    })
  }

  _shake() {
    this._modalComponent.getElement().style.animation = `shake ${SHAKE_ANIMATION_TIMEOUT / 1000}s`;

    setTimeout(() => {
      this._modalComponent.getElement().style.animation = '';
    }, SHAKE_ANIMATION_TIMEOUT)
  }

  show() {
    if (!this._isRender) {
      this._render()
    }

    this._modalComponent.show();
  }

  hide() {
    this._modalComponent.hide();
    this._modalComponent.getElement().querySelector('form').reset();
  }
}
