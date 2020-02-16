import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import routes from "./router";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {routes.map(item => {
            return (
              <Route
                key={item.pathname}
                path={item.pathname}
                render={routeProps => {
                  return <item.component {...routeProps}>ssss</item.component>;
                }}
              />
            );
          })}
          <Redirect to={routes[0].childrens[0].pathname} from="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
