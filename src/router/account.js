/*
 * @Description: 用户中心路由
 * @Author: ontheroad1992
 * @Date: 2020-02-17 16:37:08
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-02-17 16:39:48
 */
import { AccountCenter, AccountSeting } from "../views";

export default [
  {
    path: "/account/center",
    name: "个人中心",
    icon: "smile",
    component: AccountCenter
  },
  {
    path: "/account/setting",
    name: "个人设置",
    icon: "smile",
    component: AccountSeting
  }
];
