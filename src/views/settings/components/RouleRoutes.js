/*
 * @Description:
 * @Author: ontheroad1992
 * @Date: 2020-02-22 17:04:49
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-02-23 15:48:19
 */
import React, { Fragment } from "react";
import { Tree, Button } from "antd";
import router from "@/router/admin";

const { TreeNode } = Tree;

export function RouleRoutes() {
  return (
    <Fragment>
      <h3 className="route-list-title">路由列表</h3>
      <Tree checkable defaultCheckedKeys={["analysis"]} defaultExpandAll={true}>
        <TreeNode title="Dashboard" key="dashboard">
          <TreeNode
            title="分析页面 /admin/dashboard/analysis"
            key="analysis"
          ></TreeNode>
          <TreeNode
            title="监控页 /admin/dashboard/monitor"
            key="monitor"
          ></TreeNode>
        </TreeNode>
        <TreeNode title="parent 2" key="0-1">
          <TreeNode title="parent 1-0" key="0-1-0"></TreeNode>
          <TreeNode title="parent 1-1" key="0-1-1"></TreeNode>
        </TreeNode>
      </Tree>
      <Button>保存</Button>
    </Fragment>
  );
}
