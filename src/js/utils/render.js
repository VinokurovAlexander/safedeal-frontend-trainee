export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

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
