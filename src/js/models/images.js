export default class ImagesModel {
  constructor() {
    this._images = [];
  }

  setImages(images) {
    this._images = Array.from(images);
  }

  getImages() {
    return this._images;
  }
}
