/*
 * @Description: 用户路由
 * @Author: ontheroad1992
 * @Date: 2020-02-16 23:44:42
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-02-19 03:59:49
 */
import { UserLogin } from "../views";
import { UserLayout } from "../layouts";

export default {
  path: "/user",
  component: UserLayout,
  childrens: [
    {
      path: "/user",
      redirect: "/user/login"
    },
    {
      path: "/user/login",
      component: UserLogin
    }
  ]
};
