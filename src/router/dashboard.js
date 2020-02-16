import { Analysls, Monitor, Workplace } from "../views";

export default [
  {
    pathname: "/dashboard/analysis",
    icon: "smile",
    name: "分析页",
    component: Analysls
  },
  {
    pathname: "/dashboard/monitor",
    icon: "smile",
    name: "监控页",
    component: Monitor
  },
  {
    pathname: "/dashboard/workplace",
    icon: "smile",
    name: "工作台",
    component: Workplace
  }
];
