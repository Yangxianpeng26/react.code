import React, { Component } from "react";

import Clid from "./Clid";

export default class App extends Component {
  render() {
    const person = {
      name: "乔巴",
      age: 21,
      // sex: "未知",
    };
    return (
      <div>
        App...
        <Clid {...person} />
      </div>
    );
  }
}
