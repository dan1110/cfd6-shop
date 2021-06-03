import { endpoint } from './config';

const productApi = {
	getCategories() {
		return fetch(`${endpoint}/categories`, {}).then((res) => res.json());
	},
	getProduct() {
		return fetch(`${endpoint}/product`, {}).then((res) => res.json());
	},
};
export default productApi;
