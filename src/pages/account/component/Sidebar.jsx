import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

export function Sidebar() {
	const { path } = useRouteMatch();
	return (
		<div className="col-12 col-md-3">
			{/* Nav */}
			<nav className="mb-10 mb-md-0">
				<div className="list-group list-group-sm list-group-strong list-group-flush-x">
					<NavLink className="list-group-item list-group-item-action dropright-toggle" to={`${path}/orders`}>
						Orders
					</NavLink>
					<NavLink
						className="list-group-item list-group-item-action dropright-toggle "
						to={`${path}/wishlist`}
					>
						Widhlist
					</NavLink>
					<NavLink
						className="list-group-item list-group-item-action dropright-toggle "
						to={`${path}`}
					>
						Personal Info
					</NavLink>
					<NavLink
						to={`${path}/address`}
						className="list-group-item list-group-item-action dropright-toggle"
					>
						Addresses
					</NavLink>
					<NavLink
						className="list-group-item list-group-item-action dropright-toggle "
						to={`${path}/payment`}
					>
						Payment Methods
					</NavLink>
					<a className="list-group-item list-group-item-action dropright-toggle" href="#!">
						Logout
					</a>
				</div>
			</nav>
		</div>
	);
}
