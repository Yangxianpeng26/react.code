import React, { Component } from "react";
//引入路由
import { Route, Redirect, NavLink, Switch } from "react-router-dom";

import Message from "./Message";
import News from "./News";

export default class Home extends Component {
  render() {
    return (
      <>
        <h1>Home组件内容。。</h1>
        <ul className="nav nav-tabs">
          <li>
            <NavLink to="/home/news">News</NavLink>
          </li>
          <li>
            <NavLink to="/home/message">Message</NavLink>
          </li>
        </ul>
        {/* 跳转 */}
        <Switch>
          <Route path="/home/message" /* exact */ component={Message} />
          <Route path="/home/news" /* exact */ component={News} />
          <Redirect to="/home/news"></Redirect>
        </Switch>
      </>
    );
  }
}
