/*
 * @Description: 路由配置
 * @Author: ontheroad1992
 * @Date: 2020-02-21 17:38:36
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-02-21 20:45:55
 */
const Router = require("koa-router");
const Mock = require("mockjs");
const path = require("path");
const fs = require("fs");

const router = new Router();

// 获取路由文件
const routePath = path.resolve(__dirname, "./db");
const modules = fs
  .readdirSync(routePath)
  .filter(item => item !== "index.js")
  .map(item => require(`${routePath}/${item}`));

// 导入路由
modules.forEach(module => {
  for (let item in module) {
    const [method, route] = item.split(" ");
    router[method.toLocaleLowerCase()](route, ctx => {
      ctx.body = {
        data: Mock.mock(module[item])
      };
    });
  }
});

module.exports = router.routes();
