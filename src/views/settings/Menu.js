/*
 * @Description: 菜单设置
 * @Author: ontheroad1992
 * @Date: 2020-02-19 05:18:45
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-02-20 04:15:04
 */
import React, { Component } from "react";
import { ContentLayout } from "@/layouts";

@ContentLayout()
class Menu extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>菜单设置</h1>
      </div>
    );
  }
}

export default Menu;
