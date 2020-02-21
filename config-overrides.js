const path = require("path");
const {
  override,
  addDecoratorsLegacy,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias
} = require("customize-cra");
const { exec } = require("child_process");
const theme = require("./theme");

// 新增线程启动 mock 并使用 nodemon 启动，实时监听改动
exec(`nodemon ${process.cwd()}/mock/index.js`);

module.exports = override(
  addDecoratorsLegacy(),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true // `style: true` 会加载 less 文件
  }),
  fixBabelImports("lodash", {
    libraryDirectory: "",
    camel2DashComponentName: false
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: theme
  }),
  addWebpackAlias({
    "@": path.resolve(process.cwd(), "./src")
  })
  // addWebpackResolve({})
);
