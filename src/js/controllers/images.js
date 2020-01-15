import ImageController from "./image";
import ImagesList from "../components/images-list";
import {render, RenderPosition} from "../utils/render";

const renderImages = (imagesContainer, images) => {
  images.forEach((image) => {
    const imageController = new ImageController(imagesContainer);
    imageController.render(image);
  })
};

export default class ImagesController {
  constructor(container, imagesModel) {
    this._container = container;
    this._model = imagesModel;
    this._imageListComponent = new ImagesList();

    render(this._container, this._imageListComponent, RenderPosition.BEFOREEND);
  }

  render() {
    const images = this._model.getImages();
    renderImages(this._imageListComponent.getElement(), images);
  }
}
