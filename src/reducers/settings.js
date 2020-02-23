/*
 * @Description: 管理员数据
 * @Author: ontheroad1992
 * @Date: 2020-02-22 00:47:50
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-02-23 15:44:55
 */
import { SETTINGS_INIT_ROULE_GROUPS } from "@/actions/actionTypes";
// import admin from "@/router/routes/admin";

const initSettings = {
  rouleGroups: []
  // rouleRoutes: [...admi]
};

export default (state = initSettings, actions) => {
  switch (actions.type) {
    case SETTINGS_INIT_ROULE_GROUPS:
      state = { ...state, rouleGroups: [...actions.payload.groups] };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};
