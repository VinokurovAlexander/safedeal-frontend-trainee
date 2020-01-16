import {render, RenderPosition} from "../utils/render";
import Image from "../components/image";
import ModalController from "./modal";

export default class ImageController {
  constructor(container) {
    this._container = container;
    this._imageComponent = null;
    this._modalController = null;
  }

  render(image) {
    this._imageComponent = new Image(image);
    render(this._container, this._imageComponent, RenderPosition.BEFOREEND);

    this._modalController = new ModalController(this._container);

    this._imageComponent.setClickHandler(() => this._modalController.show());
  }
}
