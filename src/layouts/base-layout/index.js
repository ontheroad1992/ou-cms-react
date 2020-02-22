import React, { Component } from "react";
import { Layout } from "antd";
import BaseSider from "./BaseSider";
import BaseHeader from "./BaseHeader";
import { authControl } from "@/containers";

@authControl()
class BaseLayout extends Component {
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
    return (
      <Layout>
        <BaseSider collapsed={collapsed} {...this.props} />
        <Layout>
          <BaseHeader collapsed={collapsed} toggle={this.toggle} />
          <Layout.Content>{this.props.children}</Layout.Content>
        </Layout>
      </Layout>
    );
  }
}

export default BaseLayout;
