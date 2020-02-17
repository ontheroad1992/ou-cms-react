import loadble from "react-loadable";
import Loading from "../components/Loading";

/** user */
export const UserLogin = loadble({
  loader: () => import("./user/Login"),
  loading: Loading
});
/** end */

/** dashboard */
export const DashboardAnalysls = loadble({
  loader: () => import("./dashboard/Analysis"),
  loading: Loading
});
export const DashboardMonitor = loadble({
  loader: () => import("./dashboard/Monitor"),
  loading: Loading
});

export const DashboardWorkplace = loadble({
  loader: () => import("./dashboard/Workplace"),
  loading: Loading
});
/** end */

/** account */
export const AccountCenter = loadble({
  loader: () => import("./account/Center"),
  loading: Loading
});

export const AccountSeting = loadble({
  loader: () => import("./account/Setting"),
  loading: Loading
});
/** end */
