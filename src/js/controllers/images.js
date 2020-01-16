import ImageController from "./image";
import ImagesList from "../components/images-list";
import {render, RenderPosition} from "../utils/render";

export default class ImagesController {
  constructor(container, imagesModel, api) {
    this._container = container;
    this._model = imagesModel;
    this._imageListComponent = new ImagesList();
    this._api = api;

    render(this._container, this._imageListComponent, RenderPosition.BEFOREEND);
  }

  render() {
    const images = this._model.getImages();
    this._renderImages(this._imageListComponent.getElement(), images, this._api);
  }

  _renderImages(imagesContainer, images, api) {
    images.forEach((image) => {
      const imageController = new ImageController(imagesContainer, api);
      imageController.render(image);
    })
  }
}
