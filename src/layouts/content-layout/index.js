/*
 * @Description: 内容区域布局
 * @Author: ontheroad1992
 * @Date: 2020-02-19 15:17:44
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-02-20 04:17:48
 */

import React, { Component } from "react";
import { Breadcrumb } from "antd";
import "./ContentLayout.less";
import { tileRoutes } from "@/router";

const ContentLayout = (
  props = { content: {}, title: {}, cmp: null }
) => Cmp => {
  // 默认 content 样式
  const defaultContent = {
    style: {
      margin: "16px",
      backgroundColor: "#fff",
      height: "100%"
    },
    ...props.content
  };

  // 默认的标题样式
  const defaultTitle = {
    open: true,
    style: {},
    ...props.title
  };

  // 判断额外的组件是 class 还是 function
  const propsCmp = props.cmp;
  const PropsCmp = !propsCmp
    ? false
    : propsCmp.$$typeof
    ? propsCmp.type
    : propsCmp;

  return class extends Component {
    state = {
      breadcrumbes: []
    };

    // 解析路由的关系
    parsRoutes() {
      const currentRoutes = this.props.location.pathname.split("/");
      const arrs = [];
      for (let route of tileRoutes) {
        if ([...currentRoutes].includes(route.name)) arrs.push(route);
      }
      this.setState({
        breadcrumbes: arrs
      });
    }

    componentDidMount() {
      this.parsRoutes();
    }

    render() {
      const { route } = this.props;
      const { breadcrumbes } = this.state;
      return (
        <div style={{ height: "100%" }}>
          <div className="content-layout-header">
            {/* 面包屑导航 */}
            <Breadcrumb>
              {breadcrumbes.map(item => (
                <Breadcrumb.Item key={item.name}>{item.title}</Breadcrumb.Item>
              ))}
            </Breadcrumb>
            {/* 页面标题 */}
            {defaultTitle.open && <h3 className="title">{route.title}</h3>}
            {/* 额外的组件 */}
            <div className="content-layout-header-content">
              {PropsCmp && <PropsCmp />}
            </div>
          </div>
          <div style={defaultContent.style}>
            <Cmp {...this.props}></Cmp>
          </div>
        </div>
      );
    }
  };
};

export default ContentLayout;
