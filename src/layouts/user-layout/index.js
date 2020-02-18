import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

export default class UserLayout extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>CMS管理系统-登陆</title>
          <meta name="description" content="CMS管理系统-登陆" />
        </Helmet>
        <section className="user-layout">
          <header>
            <h1>CMS 管理系统</h1>
          </header>
          <div className="content">
            {this.props.children}
            {/* <Switch>
              <Route to="/user/login" component={UserLogin}></Route>
            </Switch> */}
          </div>
        </section>
      </Fragment>
    );
  }
}
