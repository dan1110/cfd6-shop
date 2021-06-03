import productApi from '../../services/productApi';
import { CATEGORIES, GET_PRODUCT } from '../type';

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
export function getProductAction() {
	return async (dispatch) => {
		let res = await productApi.getProduct();
		if (res) {
			dispatch({
				type: GET_PRODUCT,
				payload: res,
			});
		}
	};
}
