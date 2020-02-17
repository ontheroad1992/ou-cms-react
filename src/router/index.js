import { BaseLayout, UserLayout } from "../layouts";

import dashboard from "./dashboard";
import user from "./user";

export const adminRoutes = [
  {
    path: "/dashboard",
    icon: "dashboard",
    name: "Dashboard",
    isNav: true,
    component: BaseLayout,
    childrens: dashboard
  }
];

export const userRoutes = [
  {
    path: "/user",
    component: UserLayout,
    childrens: user
  }
];

export default [...adminRoutes];
