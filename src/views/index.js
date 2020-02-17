import loadble from "react-loadable";
import { Spin } from "antd";

export const Analysls = loadble({
  loader: () => import("./dashboard/Analysis"),
  loading: Spin
});

export const Monitor = loadble({
  loader: () => import("./dashboard/Monitor"),
  loading: Spin
});

export const Workplace = loadble({
  loader: () => import("./dashboard/Workplace"),
  loading: Spin
});

export const Login = loadble({
  loader: () => import("./user/Login"),
  loading: Spin
});
