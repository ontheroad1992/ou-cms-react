/*
 * @Description: 基础导航
 * @Author: ontheroad1992
 * @Date: 2020-02-15 17:57:35
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-02-19 03:58:52
 */
import React, { Component } from "react";
import { Menu, Icon, Layout } from "antd";

import "./BaseSider.less";
import logo from "./logo.png";
import SubMenu from "antd/lib/menu/SubMenu";

class BaseSider extends Component {
  handleClickItem = ({ key }) => {
    this.props.history.push(key);
  };

  render() {
    const { collapsed, location, route } = this.props;
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
          // openKeys={["/dashboard"]}
          selectedKeys={[location.pathname]}
          onClick={this.handleClickItem}
        >
          {initMenu(route.childrens)}
        </Menu>
      </Layout.Sider>
    );
  }
}

/**
 * 初始化菜单列表
 * @param {Array} routes 路由列表
 */
function initMenu(routes) {
  return routes.map(item => {
    if (item.isNav) {
      return initSubMenu(item);
    } else {
      return initMenuItem(item);
    }
  });
}

/**
 * 初始化子级菜单
 * @param {Object} route 路由对象
 */
function initSubMenu(route) {
  return (
    <SubMenu
      key={route.path}
      title={
        <span>
          <Icon type={route.icon} />
          <span>{route.name}</span>
        </span>
      }
    >
      {route.childrens && initMenu(route.childrens)}
    </SubMenu>
  );
}

/**
 * 初始化子菜单选项
 * @param {Object} route 路由对象
 */
function initMenuItem(route) {
  if (!route.name && !route.icon) return;
  return (
    <Menu.Item key={route.path}>
      <Icon type={route.icon} />
      <span>{route.name}</span>
    </Menu.Item>
  );
}

export default BaseSider;
