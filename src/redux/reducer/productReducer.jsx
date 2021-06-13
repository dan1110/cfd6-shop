import { CATEGORIES, GET_PRODUCT, SET_LOADING, GET_NAME_CATEGORY } from './../type';
const initialState = {
	categories: JSON.parse(localStorage.getItem('categories')) || [],
	product: [],
	paginate: [],
	loading: false,
	categoryName: '',
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
		case SET_LOADING: {
			return {
				...state,
				loading: true,
			};
		}
		case GET_NAME_CATEGORY: {
			return {
				...state,
				categoryName: action.payload.title,
			};
		}
		case GET_PRODUCT: {
			return {
				...state,
				product: action.payload.data,
				paginate: action.payload.paginate,
				loading: false,
			};
		}
		default:
			return state;
	}
}
