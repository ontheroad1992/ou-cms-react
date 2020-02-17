import { Analysls, Monitor, Workplace } from "../views";

export default [
  {
    path: "/dashboard/analysis",
    icon: "smile",
    name: "分析页",
    component: Analysls
  },
  {
    path: "/dashboard/monitor",
    icon: "smile",
    name: "监控页",
    component: Monitor
  },
  {
    path: "/dashboard/workplace",
    icon: "smile",
    name: "工作台",
    component: Workplace
  }
];
