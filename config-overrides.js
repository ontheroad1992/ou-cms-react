const path = require("path");
const {
  override,
  addDecoratorsLegacy,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias
} = require("customize-cra");
const theme = require("./theme");

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
