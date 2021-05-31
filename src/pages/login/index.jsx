import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { LoginForm, NewCustomer } from './component';

export function Login() {
	let { login } = useSelector((store) => store.auth);

	if (login) return <Redirect to="/account" />;
	return (
		<section className="py-12">
			<div className="container">
				<div className="row">
					<LoginForm />
					<NewCustomer />
				</div>
			</div>
		</section>
	);
}
