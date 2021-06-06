import { endpoint } from './config';

const productApi = {
	getCategories() {
		return fetch(`${endpoint}/categories`, {}).then((res) => res.json());
	},
	getProduct(pageParam) {
		return fetch(`${endpoint}/product?${pageParam}`).then((res) => res.json());
	},
};
export default productApi;
