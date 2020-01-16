import {render, RenderPosition} from "../utils/render";
import Modal from "../components/modal";
import ModalModel from "../models/modal";
import api from "../api/api";

export default class ModalController {
  constructor(container) {
    this._container = container;

    this._isRender = false;
    this._modalComponent = null;
    this._modalModel = null;
  }

  _render() {
    this._modalModel = new ModalModel();

    const image = this._modalModel.getImage();
    const comments = this._modalModel.getComments();
    this._modalComponent = new Modal(image, comments);
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
