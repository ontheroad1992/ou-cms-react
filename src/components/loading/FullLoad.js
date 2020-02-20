/*
 * @Description: 全凭加载
 * @Author: ontheroad1992
 * @Date: 2020-02-20 13:00:19
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-02-20 13:04:32
 */

import React, { Component } from "react";
import { Spin } from "antd";

export default class FullLoad extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <Spin size="large" />
      </div>
    );
  }
}
