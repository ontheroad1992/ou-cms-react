import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import routes from "./router";

class App extends Component {
  render() {
    console.log(initRoutes(routes));
    return <BrowserRouter>{initRoutes(routes)}</BrowserRouter>;
    // return <h1>hello world</h1>;
  }
}

/** 初始化路由 */
function initRoutes(routes) {
  // console.log("routes", routes);
  // console.log(routes[0].redirect, routes[0].path);
  return (
    <Switch>
      {routes
        .reduce((stack, route) => {
          if (!route.component && route.childrens) {
            return [...stack, ...route.childrens];
          } else {
            return [...stack, route];
          }
        }, [])
        .map(route => (
          <Route
            key={route.path}
            path={route.path}
            render={routeProps => (
              <route.component {...routeProps} route={route}>
                {route.childrens && initRoutes(route.childrens)}
              </route.component>
            )}
          />
        ))}
      {/* {routes[0].redirect && (
        <Redirect to={routes[0].redirect} from={routes[0].path} exact />
      )} */}
    </Switch>
  );
}

export default App;
