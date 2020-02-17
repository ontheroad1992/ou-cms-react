import React, { Component } from "react";
import { Layout } from "antd";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { adminRoutes } from "../../router";

export default class BaseContent extends Component {
  render() {
    console.log(this.props);
    return (
      <Layout.Content>
        <h1>Content</h1>
        {/* {this.props.children} */}
        <Switch>
          {adminRoutes.map(route => (
            <Route key={route.path} component={route.component}></Route>
          ))}
        </Switch>
      </Layout.Content>
    );
  }
}
