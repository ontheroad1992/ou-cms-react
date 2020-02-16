import React, { Component } from "react";
import { Icon, Layout } from "antd";

export default class BaseHeader extends Component {
  render() {
    const { collapsed, toggle } = this.props;
    return (
      <Layout.Header
        style={{ backgroundColor: "#fff", height: "64px", padding: 0 }}
      >
        <Icon
          className="trigger"
          type={collapsed ? "menu-unfold" : "menu-fold"}
          onClick={toggle}
          style={{
            fontSize: "24px",
            padding: "0 16px",
            verticalAlign: "middle"
          }}
        />
      </Layout.Header>
    );
  }
}
