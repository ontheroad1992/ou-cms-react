/*
 * @Description: 控制路由权限
 * @Author: ontheroad1992
 * @Date: 2020-02-17 15:52:31
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-02-22 14:40:51
 */

import React, { Component } from "react";
// import { stringify } from "querystring";
import { Spin } from "antd";

const authControl = props => Cmp => {
  class SecurityLayout extends Component {
    state = {
      isReady: false,
      isLogin: true
    };

    componentDidMount() {
      this.setState({
        isReady: true
      });
    }

    render() {
      const { isReady, isLogin } = this.state;

      // const queryString = stringify({
      //   redirect: window.location.href
      // });

      if (!isLogin) {
        return <h1>未登陆</h1>;
      }

      if (!isReady) {
        return <Spin />;
      }

      return <Cmp {...this.props} />;
    }
  }
  return SecurityLayout;
};

export default authControl;
