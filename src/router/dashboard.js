import {
  DashboardAnalysls,
  DashboardMonitor,
  DashboardWorkplace
} from "../views";

export default [
  {
    path: "/dashboard/analysis",
    icon: "smile",
    name: "分析页",
    component: DashboardAnalysls
  },
  {
    path: "/dashboard/monitor",
    icon: "smile",
    name: "监控页",
    component: DashboardMonitor
  },
  {
    path: "/dashboard/workplace",
    icon: "smile",
    name: "工作台",
    component: DashboardWorkplace
  }
];
