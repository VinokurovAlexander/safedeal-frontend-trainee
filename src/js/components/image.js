import AbstractComponent from "./abstract-components";

const createImageTemplate = (image) => (
  `<li class="images-list__item">
     <a class="images-list__link" href="#">
       <img class="images-list__img" src="${image.url}" width="280" height="171" alt="${image.description || ''}">
     </a>
   </li>
  `
);

export default class Image extends AbstractComponent {
  constructor(data) {
    super();

    this._data = data;
  }

  getTemplate() {
    return createImageTemplate(this._data);
  }

  setClickHandler(handler) {
    this.getElement().addEventListener(`click`, handler);
  }
}
