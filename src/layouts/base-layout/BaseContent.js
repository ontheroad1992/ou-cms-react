import React, { Component } from "react";
import { Layout } from "antd";

export default class BaseContent extends Component {
  render() {
    console.log(this.props);
    return (
      <Layout.Content>
        <h1>Content</h1>
        {this.props.children}
      </Layout.Content>
    );
  }
}
