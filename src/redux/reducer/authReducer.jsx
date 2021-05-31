import { LOGIN, LOGIN_ERROR, LOGOUT, REGiSTER, RESGISTER_ERROR, UPDATE_INFO } from './../type';
const initialState = {
	// login: false,
	login: JSON.parse(localStorage.getItem('login')) || false,
	data: JSON.parse(localStorage.getItem('data')) || {},
	register: {},
	loginErr: '',
	registerErr: '',
};

export default function AuthReducer(state = initialState, action) {
	switch (action.type) {
		case LOGIN: {
			localStorage.setItem('login', true);
			localStorage.setItem('data', JSON.stringify(action.payload));

			return {
				...state,
				login: true,
				data: action.payload,
			};
		}
		case LOGOUT: {
			localStorage.removeItem('login');
			localStorage.removeItem('data');
			return {
				...state,
				login: false,
				data: null,
			};
		}
		case REGiSTER: {
			localStorage.setItem('data', JSON.stringify(action.payload));

			return {
				...state,
				login: true,
				data: action.payload,
			};
		}
		case LOGIN_ERROR: {
			return {
				...state,
				loginErr: action.payload,
			};
		}
		case RESGISTER_ERROR: {
			return {
				...state,
				registerErr: action.payload,
				loginErr: '',
			};
		}
		case UPDATE_INFO: {
			return {
				...state,
				login: true,
				data: action.payload,
			};
		}
		// case LOGOUT: {
		// 	localStorage.setItem('login', JSON.stringify(false));
		// 	localStorage.setItem('data', JSON.stringify(null));
		// 	localStorage.setItem('home', JSON.stringify(null));
		// 	return {
		// 		...state,
		// 		login: false,
		// 		data: null,
		// 	};
		// }

		// case UPDATE_INFO: {
		// 	localStorage.setItem('data', JSON.stringify(action.payload));
		// 	return {
		// 		...state,
		// 		data: action.payload,
		// 	};
		// }
		// case COURSE_REGISTER: {
		// 	return {
		// 		...state,
		// 		successCourse: action.payload,
		// 	};
		// }
		// case HOME: {
		// 	// localStorage.setItem('home', JSON.stringify(action.payload));
		// 	return {
		// 		...state,
		// 		home: action.payload,
		// 	};
		// }

		default:
			return state;
	}

	return state;
}
