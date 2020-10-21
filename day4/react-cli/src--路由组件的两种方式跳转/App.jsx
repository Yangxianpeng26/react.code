import React, { Component } from "react";
//引入路由
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  NavLink,
  Switch,
} from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>Vue Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <NavLink className="list-group-item" to="/about">
                About
              </NavLink>
              <NavLink
                className="list-group-item"
                to="/home"
                aria-current="page"
              >
                Home
              </NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  <Route path="/home" /* exact */ component={Home}></Route>
                  <Route path="/about" /* exact  */ component={About}></Route>
                  <Redirect to="/home"></Redirect>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
