import { endpoint } from './config';
const authApi = {
	async refreshToken() {
		let refreshToken = JSON.parse(localStorage.getItem('token'))?.refreshToken;
		let res = await fetch(`${endpoint}/elearning/v4/refresh-token`, {
			method: 'POST',
			body: JSON.stringify({
				refreshToken: refreshToken,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((res) => res.json());
		if (res?.data?.accessToken) {
			localStorage.setItem('token', JSON.stringify(res.data));
		}
		return true;
	},
	makeLogin(data) {
		return fetch(`${endpoint}/login`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((res) => res.json());
	},
	register(data) {
		return fetch(`${endpoint}/register`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((res) => res.json());
	},
	async updateInfo(data) {
		let { accessToken } = localStorage.getItem('data').token;

		let res = await fetch(`${endpoint}/update-profile`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`,
			},
		});
		if (res.status === 200) {
			return res.json();
		} else if (res.status === 403) {
			await authApi.refreshToken();
			let { accessToken } = localStorage.getItem('data').token;

			return fetch(`${endpoint}/update-profile`, {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
			}).then((res) => res.json());
		}
	},
};

export default authApi;
