import Api from '../core/Api';
import { endpoint } from './config';
const axios = require('axios');

const authApi = {
	makeLogin(data) {
		return Api.post('login', data);
	},
	async refreshToken() {
		let refreshToken = JSON.parse(localStorage.getItem('data'))?.token?.refreshToken;
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
	// makeLogin(data) {
	//fetch api
	// return fetch(`${endpoint}/login`, {
	// 	method: 'POST',
	// 	body: JSON.stringify(data),
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 	},
	// }).then((res) => res.json());

	//axios api
	// 	return axios.post(`${endpoint}/login`, data);
	// },
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
		let token = JSON.parse(localStorage.getItem('token'))?.accessToken;

		let res = await fetch(`${endpoint}/update-profile`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});
		if (res.status === 200) {
			return res.json();
		} else if (res.status === 403) {
			await authApi.refreshToken();

			let token = JSON.parse(localStorage.getItem('token'))?.accessToken;

			return fetch(`${endpoint}/update-profile`, {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			}).then((res) => res.json());
		}
	},
};

export default authApi;
