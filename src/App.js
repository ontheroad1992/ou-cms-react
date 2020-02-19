import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import routes from "@/router";
import { ExceptionNotFound } from "@/views";

class App extends Component {
  state = {
    useAdminRoutes: []
  };

  componentDidMount() {
    this.setState({
      useAdminRoutes: [
        {
          path: "/admin/dashboard",
          name: "Dashboard",
          childrens: [
            {
              path: "/admin/dashboard/analysis",
              name: "分析页"
            },
            {
              path: "/admin/dashboard/monitor",
              name: "监控页"
            }
          ]
        }
      ]
    });
  }

  render() {
    // const useAdminRoutes = [...routes].map(item => {
    //   if (item.path === "/admin") {
    //     item.childrens = [...item.childrens].filter(route => {
    //       return route.path === "/admin/dashboard";
    //     });
    //   }
    //   return item;
    // });
    // console.log(useAdminRoutes);
    // 这里配置这样的自动导入功能，是计划完成一个菜单和路由可筛选的操作，这些都将基于角色的配置信息来
    return <BrowserRouter>{initRoutes(routes, "/")}</BrowserRouter>;
  }
}

/** 初始化路由 */
function initRoutes(routes, parentPath) {
  // 生成一个基于父级路径的 404 路由
  const notFoundPath = `${
    parentPath === "/" ? parentPath : parentPath + "/"
  }404`;
  // 格式化路由配置，将无 component 的导航菜单去掉
  const foramtRoutes = routes.reduce(
    (stack, route) => {
      if (!route.component && route.childrens) {
        return [...stack, ...route.childrens];
      } else {
        return [...stack, route];
      }
    },
    [
      {
        path: notFoundPath,
        component: ExceptionNotFound
      }
    ]
  );
  return (
    <Switch>
      {foramtRoutes.map(route => {
        // console.log("route", route.path, route.component);
        if (route.redirect) {
          return initRedirect(route);
        } else {
          return initRoute(route);
        }
      })}
      <Redirect to={notFoundPath} />
    </Switch>
  );
}

/** 重定向的初始化 */
function initRedirect(route) {
  return (
    <Redirect
      key={"$$" + route.path}
      to={route.redirect}
      from={route.path}
      exact
    />
  );
}

/** 初始化单个路由 */
function initRoute(route) {
  return (
    <Route
      key={route.path}
      path={route.path}
      exact={route.exact}
      strict={route.strict}
      render={routeProps => (
        <route.component {...routeProps} route={route}>
          {route.childrens && initRoutes(route.childrens, route.path)}
        </route.component>
      )}
    />
  );
}

export default App;
