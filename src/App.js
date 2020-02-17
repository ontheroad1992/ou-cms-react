import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import routes from "./router";
console.log(routes);

class App extends Component {
  render() {
    return <BrowserRouter>{initRoutes(routes)}</BrowserRouter>;
  }
}

/** 初始化路由 */
function initRoutes(routes) {
  return (
    <Switch>
      {routes.map(route => (
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
      <Redirect to={routes[0].path} from="/"></Redirect>
    </Switch>
  );
}

export default App;
