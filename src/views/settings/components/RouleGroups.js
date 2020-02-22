/*
 * @Description:
 * @Author: ontheroad1992
 * @Date: 2020-02-22 16:50:25
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-02-22 16:54:14
 */
import React, { useState, Fragment } from "react";
import { Menu } from "antd";

export function RouleGroups({ groups }) {
  const [selectedKey, setSelectedKey] = useState("1");

  const handleSelectedKey = ({ key }) => {
    setSelectedKey(key);
  };

  return (
    <Fragment>
      <h3 className="menu-title">角色列表</h3>
      <Menu
        style={{
          borderRight: "1px solid #e8e8e8",
          width: 256,
          height: "100%"
        }}
        mode="inline"
        selectedKeys={[selectedKey]}
        onClick={handleSelectedKey}
      >
        {groups.map(group => {
          return <Menu.Item key={group.id}>{group.name}</Menu.Item>;
        })}
      </Menu>
    </Fragment>
  );
}
