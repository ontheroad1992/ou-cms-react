/*
 * @Description: 用户路由
 * @Author: ontheroad1992
 * @Date: 2020-02-16 23:44:42
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-02-20 01:42:01
 */
import { UserLogin } from "@/views";
import { UserLayout } from "@/layouts";

export default {
  path: "/user",
  title: "用户服务",
  name: "user",
  component: UserLayout,
  childrens: [
    {
      path: "/user",
      redirect: "/user/login"
    },
    {
      path: "/user/login",
      title: "用户登陆",
      name: "login",
      component: UserLogin
    }
  ]
};
