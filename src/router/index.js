import { UserLayout, BaseLayout } from "../layouts";

import dashboard from "./dashboard";
import user from "./user";
import account from "./account";
import { UserLogin } from "../views";

export const adminRoutes = [
  {
    path: "/",
    component: BaseLayout,
    redirect: "/dashboard/analysis",
    childrens: [
      {
        path: "/dashboard",
        icon: "dashboard",
        name: "Dashboard",
        isNav: true,
        childrens: dashboard
      },
      {
        path: "/account",
        icon: "user",
        name: "账户管理",
        isNav: true,
        childrens: account
      },
      {
        path: "/test",
        icon: "user",
        name: "测试",
        component: UserLogin
      },
      {
        path: "/test1",
        icon: "user",
        name: "测试1",
        component: UserLogin
      }
    ]
  }
];

export const userRoutes = [
  {
    path: "/user",
    component: UserLayout,
    childrens: user
  }
];

export default [...adminRoutes, ...userRoutes];
