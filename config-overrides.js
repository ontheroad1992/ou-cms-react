const {
  override,
  addDecoratorsLegacy,
  fixBabelImports,
  addLessLoader
} = require("customize-cra");
const theme = require("./theme");

module.exports = override(
  addDecoratorsLegacy(),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true // `style: true` 会加载 less 文件
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: theme
  })
);
