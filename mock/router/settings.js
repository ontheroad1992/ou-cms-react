/*
 * @Description: 设置管理数据
 * @Author: ontheroad1992
 * @Date: 2020-02-21 17:43:47
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-02-21 19:16:25
 */

module.exports = {
  "get /settings/menu": {
    a: 1
  },
  "post /settings/menu": {
    b: 2
  },
  "get /settings/list": {
    "list|1-10": [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        "id|+1": 1
      }
    ]
  }
};
