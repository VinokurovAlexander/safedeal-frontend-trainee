export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

/**
 * Рендер элемента
 *
 * @param {object} container - Дом узел контейнера.
 * @param {object} component - Компонент для рендера.
 * @param {string} place - Место размещения элемента: в начале потомков контейнера или в конце.
 *
 */
export const render = (container, component, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(component.getElement());
      break;
  }

  switch (place) {
    case RenderPosition.BEFOREEND:
      container.append(component.getElement());
      break;
  }
};
