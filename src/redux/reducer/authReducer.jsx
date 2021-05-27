import { LOGIN, ERROR } from './../type';
const initialState = {
	// login: false,
	login: JSON.parse(localStorage.getItem('login')) || false,
	data: JSON.parse(localStorage.getItem('data')),
	loginErr: '',
	// successCourse: '',
	// home: '',
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
		case ERROR: {
			return {
				...state,
				loginErr: action.payload,
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
			break;
	}

	return state;
}
