import './scss/style.scss'
import API from "./js/api/api";
import ImagesModel from "./js/models/images";
import ImagesController from "./js/controllers/images";
import {END_POINT} from "./js/const";

const api = new API(END_POINT);

api.getImages()
  .then((images) => {
    const imagesModel = new ImagesModel();
    imagesModel.setImages(images);

    const mainElement = document.querySelector(`main`);
    const imagesController = new ImagesController(mainElement, imagesModel, api);
    imagesController.render();
  });
