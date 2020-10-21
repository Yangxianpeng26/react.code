import React, { Component } from "react";

import {
  Route,
  NavLink,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
//引入路由
import routers from "./router";
//引入样式
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <header className="header">
          <ul className="header-list">
            {routers.map((route) => {
              return (
                <li key={route.path}>
                  <NavLink to={route.path}>{route.title}</NavLink>
                </li>
              );
            })}
          </ul>

          <Switch>
            {routers.map((route) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                ></Route>
              );
            })}
          </Switch>
        </header>
      </Router>
    );
  }
}
