import { ADD_TO_CART, DECREASE_PRODUCT_CART, INCREASE_PRODUCT_CART, REMOVE_PRODUCT_CART, ADD_AMOUNT_PRODUCT } from '../type';

export function addToCartAction(cartItem) {
	return {
		type: ADD_TO_CART,
		payload: cartItem,
	};
}
export function decreaseProductAction(cartItem) {
	return {
		type: DECREASE_PRODUCT_CART,
		payload: cartItem,
	};
}
export function increaseProductAction(cartItem) {
	return {
		type: INCREASE_PRODUCT_CART,
		payload: cartItem,
	};
}
export function removeProductAction(cartItem) {
	return {
		type: REMOVE_PRODUCT_CART,
		payload: cartItem,
	};
}
export function addAmountProduct(data) {
	return {
		type: ADD_AMOUNT_PRODUCT,
		payload: data,
	};
}
