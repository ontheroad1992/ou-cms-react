/*
 * @Description: 内容区域布局
 * @Author: ontheroad1992
 * @Date: 2020-02-19 15:17:44
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-02-19 17:24:38
 */

import React, { Component } from "react";
import { Breadcrumb } from "antd";
import "./ContentLayout.less";

const ContentLayout = (contentStyle = {}) => Cmp => {
  // 默认 content 样式
  const defaultStyle = {
    margin: "16px",
    backgroundColor: "#fff",
    height: "100%",
    ...contentStyle
  };
  return class extends Component {
    render() {
      console.log(this.props);
      return (
        <div style={{ height: "100%" }}>
          <div className="breadcrumb-nav">
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="">Application Center</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="">Application List</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div style={defaultStyle}>
            <Cmp {...this.props}></Cmp>
          </div>
        </div>
      );
    }
  };
};

export default ContentLayout;
