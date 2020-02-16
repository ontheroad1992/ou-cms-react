import React, { Component } from "react";
import { Menu, Icon, Layout } from "antd";

import "./base-sider.less";
import logo from "./logo.png";
import routes from "../../router";
import SubMenu from "antd/lib/menu/SubMenu";

export default class BaseSider extends Component {
  handleClickItem = ({ key }) => {
    this.props.history.push(key);
  };

  render() {
    console.log(this.props);
    const { collapsed, location } = this.props;
    return (
      <Layout.Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ minHeight: "100vh" }}
      >
        {/* logo */}
        <div className="logo">
          <img src={logo} alt="ou" />
          <h1 className={collapsed ? "" : "title-show"}>Ou Yang</h1>
        </div>
        {/* 菜单列表 */}
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          onClick={this.handleClickItem}
        >
          {routes.map(route => {
            if (route.isNav) {
              return (
                <SubMenu
                  key={route.pathname}
                  title={
                    <span>
                      <Icon type={route.icon} />
                      <span>{route.name}</span>
                    </span>
                  }
                >
                  {route.childrens.map(children => {
                    return (
                      <Menu.Item key={children.pathname}>
                        <Icon type={children.icon} />
                        <span>{children.name}</span>
                      </Menu.Item>
                    );
                  })}
                </SubMenu>
              );
            } else {
              return (
                <Menu.Item key={route.pathname}>
                  <Icon type={route.icon} />
                  <span>{route.name}</span>
                </Menu.Item>
              );
            }
          })}
        </Menu>
      </Layout.Sider>
    );
  }
}
