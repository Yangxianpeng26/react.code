import React, { Component } from "react";
import Clid from "./Clid";
export default class App extends Component {
  constructor(props) {
    super(props);
    // //给this增加一个属性叫什么都行他的值等于React是个对象，对象有个方法叫createRef(),这个方法返回一个对象，React.createRef会返回一个对象会返回给createRef，再通过ref={this.createRef},最终我们再打印他的值
    this.createRef = React.createRef();
  }
  /* 鼠标点击函数 */
  handleClick = () => {
    // console.log(this.refs.sa.value);
    // console.log(this.funcRef.value);
    console.log(this.createRef.current.value);
  };
  handleBlur = (event) => {
    console.log(event.target.value);
  };
  render() {
    return (
      <div>
        {/* <input type="text" ref="sa" /> */}
        {/* <input type="text" ref={(input) =>this.funcRef = input} /> */}
        <input type="text" ref={this.createRef} />
        <button onClick={this.handleClick}>失去焦点获取数据</button>
        <input type="text" onBlur={this.handleBlur} />
        <Clid />
      </div>
    );
  }
}
