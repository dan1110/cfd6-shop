class Api {
	endpoint = 'http://cfd-reactjs.herokuapp.com';

	accessToken;
	useToken = false;
	token() {
		this.useToken = true;
		return this;
	}

	json(res) {
		if (res.status === 200) {
			return res.json();
		}
		if (res.status === 403) {
		}
		return new Promise((resolve, reject) => {});
	}

	refreshToken() {}

	async request(url, options) {
		let res = await fetch(url, options);
		if (res.status === 200) {
			return res;
		}
		if (res.status === 403) {
		}
		return new Promise((resolve, reject) => {});
	}

	setupHeader() {
		let headers = {
			'Content-Type': 'application/json',
		};
		// let accessToken = JSON.parse(localStorage.getItem('data')?.token?.accessToken);
		if (this.useToken) {
			let token = JSON.parse(localStorage.getItem('data')?.token?.accessToken);

			if (token) {
				headers.Authorization = `Bearer ${token}`;
			}
		}

		return headers;
	}

	get(url) {
		return this.request(`${this.endpoint}/${url}`).then(this.json);
	}

	post(url, data = {}) {
		let headers = this.setupHeader();
		let body = JSON.stringify(data);
		return this.request(`${this.endpoint}/${url}`, {
			headers,
			method: 'POST',
			body,
		}).then(this.json);
		// let header = this.setupHeader();
		// let body = JSON.stringify(data);
		// chỗ đó có gạch à ?
		//:v link mà ở trên tui đâu có bỏ
		// return fetch(this.endpoint + url, {
		// 	header,
		// 	body,
		// }).then(this.json); c
	}
}

export default new Api();
