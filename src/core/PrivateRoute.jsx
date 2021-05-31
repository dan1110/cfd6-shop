import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export default function PrivateRoute(props) {
	let { login } = useSelector((state) => state.auth);

	if (!login) {
		return (
			<Route>
				<Redirect to="/login" />;
			</Route>
		);
	}
	return <Route {...props} />;
}
