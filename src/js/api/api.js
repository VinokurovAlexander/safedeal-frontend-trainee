const Method = {
  GET: `GET`,
  POST: `POST`
};

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

export default class API {
  constructor(endPoint) {
    this._endPoint = endPoint;
  }

  getImages() {
    return this._load({url: ``})
      .then((response) => response.json())
  }

  _load({url, method = Method.GET, body = null, headers = new Headers()}) {
    return fetch(`${this._endPoint}/${url}`, {method, body, headers})
      .then(checkStatus)
      .catch((err) => {
        throw err;
      });
  }

  getImage(id) {
    return this._load({url: `${id}`})
      .then((response) => response.json())
  }

  addComment(id, comment) {
    return this._load({
      url: `${id}/comments`,
      method: Method.POST,
      body: JSON.stringify(comment),
      headers: new Headers({'Content-Type': `application/json`})
    })
  }
}
