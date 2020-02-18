/*
 * @Description: 管理员版面路由
 * @Author: ontheroad1992
 * @Date: 2020-02-19 03:51:22
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-02-19 03:54:45
 */
import { BaseLayout } from "../layouts";
import {
  DashboardAnalysls,
  DashboardMonitor,
  DashboardWorkplace,
  AccountCenter,
  AccountSeting
} from "../views";

export default {
  path: "/admin",
  component: BaseLayout,
  strict: false,
  exact: false,
  childrens: [
    {
      path: "/admin",
      redirect: "/admin/dashboard/analysis"
    },
    {
      path: "/admin/dashboard",
      icon: "dashboard",
      name: "Dashboard",
      isNav: true,
      childrens: [
        {
          path: "/admin/dashboard/analysis",
          icon: "smile",
          name: "分析页",
          component: DashboardAnalysls
        },
        {
          path: "/admin/dashboard/monitor",
          icon: "smile",
          name: "监控页",
          component: DashboardMonitor
        },
        {
          path: "/admin/dashboard/workplace",
          icon: "smile",
          name: "工作台",
          component: DashboardWorkplace
        }
      ]
    },
    {
      path: "/admin/account",
      icon: "user",
      name: "账户管理",
      isNav: true,
      childrens: [
        {
          path: "/admin/account/center",
          name: "个人中心",
          icon: "smile",
          component: AccountCenter
        },
        {
          path: "/admin/account/setting",
          name: "个人设置",
          icon: "smile",
          component: AccountSeting
        }
      ]
    }
  ]
};
