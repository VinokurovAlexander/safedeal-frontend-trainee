import {render, RenderPosition} from "../utils/render";
import Image from "../components/image";
import ModalController from "./modal";
import ModalModel from "../models/modal";

export default class ImageController {
  constructor(container, api) {
    this._container = container;
    this._imageComponent = null;
    this._modalController = null;
    this._api = api;
  }

  render(image) {
    this._imageComponent = new Image(image);
    render(this._container, this._imageComponent, RenderPosition.BEFOREEND);

    this._modalModel = new ModalModel();
    this._api.getImage(image.id)
      .then((image) => this._modalModel.setImage(image));

    this._modalController = new ModalController(this._container, this._modalModel, this._api);

    this._imageComponent.setClickHandler(() => this._modalController.show());
  }
}
