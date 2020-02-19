/*
 * @Description: 基础导航
 * @Author: ontheroad1992
 * @Date: 2020-02-15 17:57:35
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-02-19 14:25:48
 */
import React from "react";
import { Menu, Icon, Layout } from "antd";

import "./BaseSider.less";
import logo from "./logo.png";
import SubMenu from "antd/lib/menu/SubMenu";

function BaseSider({ collapsed, history, location, route }) {
  // 不知道怎么写了，如果把 openKeys 固定死的，菜单在缩进时候，侧边菜单显示会出问题
  // 考虑路由配置中有定位的选项，就把默认值改为他
  let currentPath = location.pathname;
  if (location.pathname === route.path) {
    for (let item of [...route.childrens]) {
      if (item.redirect) currentPath = item.redirect;
    }
  }
  const defaultOpenKeys = currentPath
    .split("/")
    .slice(0, -1)
    .join("/");

  const handleClickItem = ({ key }) => {
    history.push(key);
  };

  return (
    <Layout.Sider
      trigger={null}
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
        defaultOpenKeys={[defaultOpenKeys]}
        selectedKeys={[location.pathname]}
        onClick={handleClickItem}
      >
        {initMenu(route.childrens)}
      </Menu>
    </Layout.Sider>
  );
}

function initMenu(routes) {
  return routes.map(item => {
    if (item.isNav) {
      return initSubMenu(item);
    } else {
      return initMenuItem(item);
    }
  });
}

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

function initMenuItem(route) {
  if (!route.name && !route.icon) return;
  return (
    <Menu.Item key={route.path}>
      <Icon type={route.icon || "smile"} />
      <span>{route.name}</span>
    </Menu.Item>
  );
}

export default BaseSider;
