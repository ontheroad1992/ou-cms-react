import loadble from "react-loadable";
import { Spin } from "antd";

/** user */
export const UserLogin = loadble({
  loader: () => import("./user/Login"),
  loading: Spin
});
/** end */

/** dashboard */
export const DashboardAnalysls = loadble({
  loader: () => import("./dashboard/Analysis"),
  loading: Spin
});
export const DashboardMonitor = loadble({
  loader: () => import("./dashboard/Monitor"),
  loading: Spin
});

export const DashboardWorkplace = loadble({
  loader: () => import("./dashboard/Workplace"),
  loading: Spin
});
/** end */

/** account */
export const AccountCenter = loadble({
  loader: () => import("./account/Center"),
  loading: Spin
});

export const AccountSeting = loadble({
  loader: () => import("./account/Setting"),
  loading: Spin
});
/** end */
