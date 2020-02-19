/*
 * @Description: 内容区域布局
 * @Author: ontheroad1992
 * @Date: 2020-02-19 15:17:44
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-02-20 02:25:37
 */

import React, { Component } from "react";
import { Breadcrumb } from "antd";
import "./ContentLayout.less";
import { tileRoutes } from "@/router";

const ContentLayout = (props = { contentStyle: {}, title: {} }) => Cmp => {
  // 默认 content 样式
  const defaultStyle = {
    margin: "16px",
    backgroundColor: "#fff",
    height: "100%",
    ...props.contentStyle
  };
  console.log(defaultStyle);

  const defaultTitle = {
    open: true,
    style: {},
    ...props.title
  };

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
      console.log(this.props);
      const { route } = this.props;
      const { breadcrumbes } = this.state;
      return (
        <div style={{ height: "100%" }}>
          <div className="content-layout-header">
            <Breadcrumb>
              {breadcrumbes.map(item => (
                <Breadcrumb.Item key={item.name}>{item.title}</Breadcrumb.Item>
              ))}
            </Breadcrumb>
            <h3 className="title">{route.title}</h3>
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
