//引入Readct
import React, { Component } from "react";
import Cild from "./Cild";

//创建SE6类组件并且暴露出去extends是继承
//App是构造函数继承了组件
export default class App extends Component {
  //渲染函数
  render() {
    //创建一个人
    const person = {
      name: "杨显鹏",
      age: 18,
      // sex: "男",
    };
    //返回 必需要有一个根标签
    return (
      <div>
        App...
        <Cild {...person} />
      </div>
    );
  }
}
