/*
 * @Description: 管理员版面路由
 * @Author: ontheroad1992
 * @Date: 2020-02-19 03:51:22
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-02-19 05:25:48
 */
import { BaseLayout } from "../layouts";
import {
  DashboardAnalysls,
  DashboardMonitor,
  DashboardWorkplace,
  AccountCenter,
  AccountSeting,
  SettingAuthority,
  SettingMenu
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
          name: "分析页",
          component: DashboardAnalysls
        },
        {
          path: "/admin/dashboard/monitor",
          name: "监控页",
          component: DashboardMonitor
        },
        {
          path: "/admin/dashboard/workplace",
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
          component: AccountCenter
        },
        {
          path: "/admin/account/setting",
          name: "个人设置",
          component: AccountSeting
        }
      ]
    },
    {
      path: "/admin/setting",
      icon: "setting",
      name: "系统设置",
      isNav: true,
      childrens: [
        {
          path: "/admin/setting/authority",
          name: "权限管理",
          component: SettingAuthority
        },
        {
          path: "/admin/setting/menu",
          name: "菜单管理",
          component: SettingMenu
        }
      ]
    }
  ]
};
