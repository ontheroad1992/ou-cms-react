import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import zhCN from "antd/es/locale/zh_CN";
import { ConfigProvider } from "antd";
import "@/assets/base.less";
import store from "./store";

import loadble from "react-loadable";
import { FullLoad } from "./components";

const App = loadble({
  loader: () => import("./App"),
  loading: FullLoad
});

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </Provider>,
  document.getElementById("root")
);
