import { CATEGORIES, GET_PRODUCT } from './../type';
const initialState = {
	categories: JSON.parse(localStorage.getItem('categories')) || {},
	product: [],
	paginate: [],
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
				product: action.payload.data,
				paginate: action.payload.paginate,
			};
		}
		default:
			return state;
	}
}
