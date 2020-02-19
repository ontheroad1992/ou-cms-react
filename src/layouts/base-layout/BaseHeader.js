import React, { Component } from "react";
import { Icon, Layout } from "antd";
import "./BaseHeader.less";

export default class BaseHeader extends Component {
  render() {
    const { collapsed, toggle } = this.props;
    return (
      <Layout.Header className="layout-header">
        <Icon
          className="trigger"
          type={collapsed ? "menu-unfold" : "menu-fold"}
          onClick={toggle}
          style={{
            fontSize: "24px",
            verticalAlign: "middle",
            padding: "0 16px"
          }}
        />
      </Layout.Header>
    );
  }
}
