//引入React
import React, { Component } from "react";
import Child from "./Child";
//引入子组件
//Se6组件类
/* export default class App extends Component */
export default class App extends Component {
  render() {
    //设置一个数据
    const person = {
      name: "利利",
      age: 80,
      // sex: "男",
    };
    return (
      <div>
        App...
        <Child {...person} />
      </div>
    );
  }
}
