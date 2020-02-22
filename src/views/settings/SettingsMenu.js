/*
 * @Description: 菜单设置
 * @Author: ontheroad1992
 * @Date: 2020-02-19 05:18:45
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-02-22 17:05:51
 */
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import "./SettingsMenu.less";
import { containerNav } from "@/containers";
import { getSettingsRouleGroups } from "@/actions/settings";
import { RouleGroups } from "./components/RouleGroups";
import { RouleRoutes } from "./components/RouleRoutes";

@connect(
  state => ({
    rouleGroups: state.settings.rouleGroups
  }),
  {
    getSettingsRouleGroups
  }
)
@containerNav()
class SettingsMenu extends PureComponent {
  componentDidMount() {
    this.props.getSettingsRouleGroups();
  }

  render() {
    const { rouleGroups } = this.props;
    console.log(this.props);
    console.log("render");
    return (
      <div className="settings-menu-wrap">
        {/* 角色列表 */}
        <div className="settings-menu-left">
          <RouleGroups groups={rouleGroups} />
        </div>
        <div className="settings-menu-right">
          <RouleRoutes />
        </div>
      </div>
    );
  }
}

export default SettingsMenu;
