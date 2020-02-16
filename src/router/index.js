import { BaseLayout, UserLayout } from "../layouts";

import dashboard from "./dashboard";

export default [
  {
    pathname: "/dashboard",
    icon: "dashboard",
    name: "Dashboard",
    isNav: true,
    component: BaseLayout,
    childrens: dashboard
  }
];
