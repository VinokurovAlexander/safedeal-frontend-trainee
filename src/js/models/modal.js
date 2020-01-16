export default class ModalModel {
  constructor() {
    this._image = {};
  }

  getImage() {
    return this._image;
  }

  setImage(image) {
    this._image = image;
  }
}
