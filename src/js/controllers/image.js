import Image from "../components/image";
import {render, RenderPosition} from "../utils/render"

export default class ImageController {
  constructor(container) {
    this._container = container;
    this._imageComponent = null;
  }

  render(image) {
    this._imageComponent = new Image(image);
    render(this._container, this._imageComponent, RenderPosition.BEFOREEND);
  }
}
