import React from "react";
import { Route, Switch } from "react-router";
import PrivateRoute from "./PrivateRoute";

// routers = [
// 	{
// 		component: 'abc',
// 		path: '...',
// 		exact: true,
// 		routers: [],
// 	},
// ];

export function routerConfig(routes, parentPath = "") {
  return (
    <Switch>
      {routes.map((e) => {
        let {
          exact,
          path,
          component: Component,
          routers: childRouters,
          auth,
        } = e;
        if (!path) path = "";
        path = parentPath + "/" + path;
        path = path.replace(/\/+/g, "/");

        let child = null;
        if (childRouters) {
          child = routerConfig(childRouters, path);
        }

        if (auth) {
          <PrivateRoute
            exact={exact}
            path={path}
            component={(props) => <Component {...props}>{child}</Component>}
          />;
        }

        return (
          <Route
            exact={exact}
            path={path}
            component={(props) => <Component {...props}>{child}</Component>}
          />
        );
      })}
    </Switch>
  );
}
