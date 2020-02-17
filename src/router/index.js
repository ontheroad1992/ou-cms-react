import { UserLayout, BaseLayout } from "../layouts";

import dashboard from "./dashboard";
import user from "./user";
import account from "./account";

export const adminRoutes = [
  {
    path: "/",
    component: BaseLayout,
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

export default [...userRoutes, ...adminRoutes];
