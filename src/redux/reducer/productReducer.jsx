import { CATEGORIES, GET_PRODUCT, SET_LOADING } from './../type';
const initialState = {
	categories: JSON.parse(localStorage.getItem('categories')) || {},
	product: [],
	paginate: [],
	loading: false,
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
