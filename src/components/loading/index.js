/*
 * @Description: 页面加载等待
 * @Author: ontheroad1992
 * @Date: 2020-02-20 04:23:34
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-02-20 04:32:38
 */

import React, { Component } from "react";
import "./loading.less";
import { Spin } from "antd";

export default class Loading extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%"
        }}
      >
        <Spin size="large"></Spin>
      </div>
    );
  }
}
