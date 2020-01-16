import {render, RenderPosition} from "../utils/render";
import Modal from "../components/modal";

export default class ModalController {
  constructor(container, model) {
    this._container = container;

    this._isRender = false;
    this._modalComponent = null;
    this._modalModel = model;
  }

  _render() {
    const image = this._modalModel.getImage();

    this._modalComponent = new Modal(image, image.comments);
    render(this._container, this._modalComponent, RenderPosition.BEFOREEND);
    this._isRender = true;
  }

  show() {
    if (!this._isRender) {
      this._render()
    }

    this._modalComponent.show();
  }

  hide() {
    this._modalComponent.hide();
  }
}
