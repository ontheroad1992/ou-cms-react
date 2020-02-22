/*
 * @Description: 管理员版面路由
 * @Author: ontheroad1992
 * @Date: 2020-02-19 03:51:22
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-02-21 22:07:26
 */
import { BaseLayout } from "@/layouts";
import {
  DashboardAnalysls,
  DashboardMonitor,
  DashboardWorkplace,
  AccountCenter,
  AccountSeting,
  SettingAuthority,
  SettingsMenu
} from "@/views";

export default {
  path: "/admin",
  name: "admin",
  title: "后台系统",
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
      name: "dashboard",
      title: "Dashboard",
      isNav: true,
      childrens: [
        {
          path: "/admin/dashboard/analysis",
          name: "analysis",
          title: "分析页面",
          component: DashboardAnalysls
        },
        {
          path: "/admin/dashboard/monitor",
          name: "monitor",
          title: "监控页",
          component: DashboardMonitor
        },
        {
          path: "/admin/dashboard/workplace",
          name: "workplace",
          title: "工作台",
          component: DashboardWorkplace
        }
      ]
    },
    {
      path: "/admin/account",
      icon: "user",
      name: "account",
      title: "账户管理",
      isNav: true,
      childrens: [
        {
          path: "/admin/account/center",
          name: "center",
          title: "个人中心",
          component: AccountCenter
        },
        {
          path: "/admin/account/setting",
          name: "setting",
          title: "个人设置",
          component: AccountSeting
        }
      ]
    },
    {
      path: "/admin/settings",
      icon: "setting",
      name: "settings",
      title: "系统设置",
      isNav: true,
      childrens: [
        {
          path: "/admin/settings/authority",
          name: "authority",
          title: "权限管理",
          component: SettingAuthority
        },
        {
          path: "/admin/settings/menu",
          name: "menu",
          title: "菜单管理",
          component: SettingsMenu
        }
      ]
    }
  ]
};
