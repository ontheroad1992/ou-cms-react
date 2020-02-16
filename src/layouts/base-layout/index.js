import React, { Component } from "react";
import { Layout } from "antd";
import BaseSider from "./BaseSider";
import BaseHeader from "./BaseHeader";
import BaseContent from "./BaseContent";

export default class BaseLayout extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { collapsed } = this.state;
    console.log("collapsed", collapsed);
    return (
      <Layout>
        <BaseSider collapsed={collapsed} {...this.props} />
        <Layout>
          <BaseHeader collapsed={collapsed} toggle={this.toggle} />
          <BaseContent {...this.props} />
        </Layout>
      </Layout>
    );
  }
}
