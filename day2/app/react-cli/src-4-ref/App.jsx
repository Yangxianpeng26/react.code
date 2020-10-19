import React, { Component } from "react";
import Clid from "./Clid";
export default class App extends Component {
  /*  constructor(props) {
    super(props);
    // //给this增加一个属性叫什么都行他的值等于React是个对象，对象有个方法叫createRef(),这个方法返回一个对象，React.createRef会返回一个对象会返回给createRef，再通过ref={this.createRef},最终我们再打印他的值
    this.createRef = React.createRef();
  } */

  //实例对象上的方法
  createRef = React.createRef();
  childRef = React.createRef();

  //普遍函数也是实例对象直接方法
  //普遍函数用箭头函数
  heolClick = () => {
    // console.log(this.refs.stringRef.value);
    // console.log(this.createFuc.value);
    console.log(this.createRef.current.value);
  };
  //实例对象的直接方法 鼠标失去焦点event
  heolBlur = (event) => {
    console.log(event.target.value);
  };

  render() {
    return (
      <div>
        {/* <input type="text" ref="stringRef" />放弃用了 */}
        {/* <input type="text" ref={(input) => (this.createFuc = input)} />用的是函数 */}
        <input type="text" ref={this.createRef} />
        <button onClick={this.heolClick}>点击获取内容</button>
        <input type="text" placeholder="请输入内容" onBlur={this.heolBlur} />
        <Clid ref={this.childRef} />
      </div>
    );
  }
}
