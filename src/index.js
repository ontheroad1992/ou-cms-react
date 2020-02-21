import React from "react";
import ReactDOM from "react-dom";

import zhCN from "antd/es/locale/zh_CN";
import { ConfigProvider } from "antd";
import "@/assets/base.less";

import loadble from "react-loadable";
import { FullLoad } from "./components";

const App = loadble({
  loader: () => import("./App"),
  loading: FullLoad
});

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>,
  document.getElementById("root")
);
