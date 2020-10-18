import React, { Component } from "react";
import Cild from "./Cild";

export default class App extends Component {
  //第三种方法createRef是放在
  constructor(props) {
    super(props);
    //给this增加一个属性叫什么都行他的值等于React是个对象，对象有个方法叫createRef(),这个方法返回一个对象，React.createRef会返回一个对象会返回给createRef，再通过ref={this.createRef},最终我们再打印他的值
    this.createRef = React.createRef();
    // console.log(this.createRef); {current: null}
  }

  //点击事件是实例对象的要直接方法
  handleClick = () => {
    // console.log(this.refs.stringRef.value);
    // console.log(this.funsadcRef.value);
    console.log(this.createRef.current.value);
  };
  handleBlur = (event) => {
    console.log(event.target.value);
  };
  render() {
    return (
      <div>
        {/* <input type="text" ref="stringRef" /> 放弃用*/}
        {/* 这个函数会自动调用input会挂载到实参,绑定在this.funcRef上 */}
        {/* <input type="text" ref={(input) => (this.funsadcRef = input)} /> */}
        <input type="text" ref={this.createRef} />
        <button onClick={this.handleClick}>失去焦点获取内容</button>
        <input type="text" placeholder="请输入内容" onBlur={this.handleBlur} />
        <Cild />
      </div>
    );
  }
}
