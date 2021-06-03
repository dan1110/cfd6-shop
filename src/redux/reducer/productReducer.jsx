import { CATEGORIES, GET_PRODUCT } from './../type';
const initialState = {
	categories: JSON.parse(localStorage.getItem('categories')) || {},
	product: '',
};

export default function ProductReducer(state = initialState, action) {
	switch (action.type) {
		case CATEGORIES: {
			localStorage.setItem('categories', JSON.stringify(action.payload));
			return {
				...state,
				categories: action.payload,
			};
		}
		case GET_PRODUCT: {
			return {
				...state,
				product: action.payload,
			};
		}
		default:
			return state;
	}
}
