import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router';
import {
	Sidebar,
	Address,
	AddressEdit,
	Order,
	Orders,
	Payment,
	PaymentEdit,
	PersonalInfo,
	WishList,
} from './component';

export function Account() {
	let { path } = useRouteMatch();
	let { login } = useSelector((state) => state.auth);

	if (!login) return <Redirect to="/login" />;

	return (
		<section className="pt-7 pb-12">
			<div className="container">
				<div className="row">
					<div className="col-12 text-center">
						{/* Heading */}
						<h3 className="mb-10">My Account</h3>
					</div>
				</div>
				<div className="row">
					<Sidebar />
					<Switch>
						<Route path={`${path}/address`} component={Address} />
						<Route path={`${path}/address-edit`} component={AddressEdit} />
						<Route path={`${path}/order`} component={Order} />
						<Route path={`${path}/orders`} component={Orders} />
						<Route path={`${path}/payment`} component={Payment} />
						<Route path={`${path}/payment-edit`} component={PaymentEdit} />
						<Route path="/" component={PersonalInfo} />
						<Route path={`${path}/wishlist`} component={WishList} />
					</Switch>
				</div>
			</div>
		</section>
	);
}
