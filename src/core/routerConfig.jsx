import React from 'react';
import { Route, Switch } from 'react-router';

// routers = [
// 	{
// 		component: 'abc',
// 		path: '...',
// 		exact: true,
// 		routers: [],
// 	},
// ];

export function routerConfig(routes) {
	return (
		<Switch>
			{routes.map((e) => {
				let { exact, path, component: Component, routers: childRouters } = e;

				let child = null;
				if (childRouters) {
					child = routerConfig(childRouters);
				}
				return (
					<Route exact={exact} path={path} component={(props) => <Component {...props}>{child}</Component>} />
				);
			})}
		</Switch>
	);
}
