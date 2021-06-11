export class Api {
  endpoint = "";
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  json(res) {
    if (res.status === 200) {
      return res.json();
    }
  }

  setupHeader() {
    let header = {
      "Content-Type": "application/json",
    };

    return header;
  }
  get(url) {
    return fetch(this.endpoint + url).then(this.json);
  }
  post(url, data = {}) {
    let header = this.setupHeader();
    let body = JSON.stringify(data);
    return fetch(this.endpoint + url, {
      header,
      body,
    }).then(this.json);
  }
}
