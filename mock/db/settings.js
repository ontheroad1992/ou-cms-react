/*
 * @Description: 设置管理数据
 * @Author: ontheroad1992
 * @Date: 2020-02-21 17:43:47
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-02-22 17:02:33
 */

module.exports = {
  "get /settings/rouleGroups": [
    { id: 1, name: "高级管理员", info: "所有权限" },
    { id: 2, name: "客户人员", info: "部分查询功能" },
    { id: 3, name: "审核人员", info: "审核资产" }
  ]
};
