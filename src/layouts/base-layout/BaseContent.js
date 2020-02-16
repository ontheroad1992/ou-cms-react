import React, { Component } from "react";
import { Layout } from "antd";
import { Route, Switch, Redirect } from "react-router-dom";

export default class BaseContent extends Component {
  render() {
    console.log(this.props);
    return (
      <Layout.Content
        style={{
          margin: "24px 16px",
          background: "#fff",
          minHeight: 280
        }}
      >
        <h1>Content</h1>
        {this.props.children}
      </Layout.Content>
    );
  }
}
