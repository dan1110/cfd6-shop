import authApi from '../../services/authApi';
import { LOGIN, LOGIN_ERROR, LOGOUT, REGiSTER, RESGISTER_ERROR, UPDATE_INFO } from '../type';

export function loginAction(form) {
	return async (dispatch) => {
		let res = await authApi.makeLogin(form);
		if (res?.data) {
			dispatch({
				type: LOGIN,
				payload: res.data,
			});
		} else if (res?.error) {
			console.log(res);
			dispatch({
				type: LOGIN_ERROR,
				payload: res.error,
			});
		}
	};
}
export function registerAction(form) {
	return async (dispatch) => {
		let res = await authApi.register(form);
		if (res?.data) {
			dispatch({
				type: REGiSTER,
				payload: res.data,
			});
		} else if (res?.error) {
			dispatch({
				type: RESGISTER_ERROR,
				payload: res.error,
			});
		}
	};
}
export function logoutAction() {
	return (dispatch) => {
		dispatch({
			type: LOGOUT,
		});
	};
}
export function updateInfoAction() {
	return (dispatch) => {
		dispatch({
			type: UPDATE_INFO,
		});
	};
}
