import productApi from '../../services/productApi';
import { CATEGORIES, GET_PRODUCT, PRODUCT_VIEW } from '../type';

export function getCategoriesAction() {
	return async (dispatch) => {
		let res = await productApi.getCategories();
		if (res) {
			dispatch({
				type: CATEGORIES,
				payload: res,
			});
		}
	};
}
export function getProductAction(pageParam) {
	return async (dispatch) => {
		let res = await productApi.getProduct(pageParam);
		if (res) {
			dispatch({
				type: GET_PRODUCT,
				payload: res,
			});
		}
	};
}
export function getProductDetailAction(slug) {
	return async (dispatch) => {
		let res = await productApi.getProductDetail(slug);
		if (res) {
			console.log('detail', res);
		}
	};
}
export function getProductViewAction(data) {
	return {
		type: PRODUCT_VIEW,
		payload: data,
	};
}
