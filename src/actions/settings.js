/*
 * @Description: admin action
 * @Author: ontheroad1992
 * @Date: 2020-02-22 13:18:32
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-02-22 16:59:03
 */
import { SETTINGS_INIT_ROULE_GROUPS } from "./actionTypes";
import ServerSettings from "@/server/ServerSettings";

const initRouleGroups = groups => {
  return {
    type: SETTINGS_INIT_ROULE_GROUPS,
    payload: { groups }
  };
};

export const getSettingsRouleGroups = () => dispatch => {
  ServerSettings.getRouleGroups().then(res => {
    dispatch(initRouleGroups(res.data));
  });
};
