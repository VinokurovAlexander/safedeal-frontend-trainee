import AbstractComponent from "./abstract-components";

export default class ImagesList extends AbstractComponent{
  getTemplate() {
    return `<ul class="images-list"></ul>`
  }
}
