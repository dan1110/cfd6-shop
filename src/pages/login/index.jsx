import React from 'react';
import { LoginForm, NewCustomer } from './component';

export function Login() {
	
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
