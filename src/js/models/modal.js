export default class ModalModel {
  constructor() {
    this._image = {};
    this._comments = [];
  }

  getImage() {
    return this._image;
  }

  setImage(image) {
    this._image = image;
  }

  getComments() {
    return this._comments;
  }

  setComments(comments) {
    this._comments = Array.from(comments);
  }
}
