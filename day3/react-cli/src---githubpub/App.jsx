import React, { Component } from "react";

import List from "./pages/List";
import Search from "./pages/Search";

export default class App extends Component {
  render() {
    /* 1. 将class改成className
  2. 将未闭合标签加上结束符
  3. 将style改成{{}} */
    return (
      <div data-reactroot="" className="container">
        <Search />
        <List />
      </div>
    );
  }
}
