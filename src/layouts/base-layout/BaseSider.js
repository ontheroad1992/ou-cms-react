/*
 * @Description: 基础导航
 * @Author: ontheroad1992
 * @Date: 2020-02-15 17:57:35
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-02-19 05:35:55
 */
import React, { useState, useEffect } from "react";
import { Menu, Icon, Layout } from "antd";

import "./BaseSider.less";
import logo from "./logo.png";
import SubMenu from "antd/lib/menu/SubMenu";

function BaseSider({ collapsed, history, location, route }) {
  const [openKeys, setOpenKeys] = useState(["/"]);

  const handleClickItem = ({ key }) => {
    history.push(key);
  };

  const handleSubItem = ({ key }) => {
    const keyIndex = openKeys.indexOf(key);
    if (keyIndex >= 0) {
      const openKeys_ = [...openKeys];
      openKeys_.splice(keyIndex, 1);
      setOpenKeys(openKeys_);
    } else {
      setOpenKeys([...openKeys, key]);
    }
  };

  useEffect(() => {
    setOpenKeys([
      location.pathname
        .split("/")
        .slice(0, -1)
        .join("/")
    ]);
  }, [location]);

  const initMenu = routes => {
    return routes.map(item => {
      if (item.isNav) {
        return initSubMenu(item);
      } else {
        return initMenuItem(item);
      }
    });
  };

  const initSubMenu = route => {
    return (
      <SubMenu
        key={route.path}
        onTitleClick={handleSubItem}
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
  };

  const initMenuItem = route => {
    if (!route.name && !route.icon) return;
    return (
      <Menu.Item key={route.path}>
        <Icon type={route.icon || "smile"} />
        <span>{route.name}</span>
      </Menu.Item>
    );
  };

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
        openKeys={openKeys}
        // defaultOpenKeys={[subMenuItem]}
        selectedKeys={[location.pathname]}
        onClick={handleClickItem}
      >
        {initMenu(route.childrens)}
      </Menu>
    </Layout.Sider>
  );
}

export default BaseSider;
