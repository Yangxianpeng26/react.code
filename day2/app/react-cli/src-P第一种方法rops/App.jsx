import React, { Component } from "react";
//引入子组件
import Child from "./Child";
class App extends React.Component {
  //渲染函数
  render() {
    //设置一个状态数据
    const person = {
      name: "jack",
      age: 18,
      sex: "男",
    };
    //
    return (
      <div>
        {/* 主组件文本*/}
        App...
        {/* 扩展属性：将对象的所有属性通过props传递数据 */}
        <Child {...person} />
      </div>
    );
  }
}

export default App;
