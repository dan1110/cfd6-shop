import authApi from '../../services/authApi';
import { LOGIN, ERROR } from '../type';

export function loginAction(form) {
	return async (dispatch) => {
		let res = await authApi.makeLogin(form);
		if (res?.data) {
			dispatch({
				type: LOGIN,
				payload: res.data,
			});
		} else if (res?.error) {
			dispatch({
				type: ERROR,
				payload: res.data,
			});
		}
	};
}
