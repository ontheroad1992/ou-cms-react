/*
 * @Description: 模拟数据
 * @Author: ontheroad1992
 * @Date: 2020-02-20 13:50:51
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-02-21 19:18:08
 */
const Koa = require("koa");
const cors = require("./cors");
const routes = require("./router");

const app = new Koa();

app.use(cors);
app.use(routes);

app.listen("8090", () => {
  console.log("mock 数据开启", "http://localhost:8090");
});
