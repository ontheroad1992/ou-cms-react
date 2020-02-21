/*
 * @Description: 解决跨域
 * @Author: ontheroad1992
 * @Date: 2020-02-21 17:34:09
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-02-21 17:36:38
 */

module.exports = async ({ res }, next) => {
  // console.log(header);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, GET, POST, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  await next();
};
