import React, { Component } from "react";
//引入子组件
import Child from "./Child";



//extends继承Component
export default class App extends Component {
  //ref可以获取Dom对象，也可以获取组件实例化对象
    // 分有stringRef(弃用) createRef funcRef




  //Es6语法
  constructor(props) {
    //props能在constructor使用this的方法                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    // 不写pusper那么constructor里面this就没有用
    //继承父级的一些东西,传入props
    //写了constructor也就一定写super
    super(props);
    //绑定到实例对象App上createRef方法来的
    this.createRef = React.createRef();
    // console.log(this.createRef); {current: null}
  }
  //原型上的直接方法
  test() {}

  //实例对象上的方法
  createRef = React.createRef();
  childRef = React.createRef();
  //普遍函数也是实例对象直接方法
  //普遍函数用箭头函数
  handleClick = () => {
    // console.log(this.refs.stringRef.value);
    // console.log(this.funcRef.value);
    console.log(this.createRef.current.value);
    // console.log(this.childRef);
  };
  //是event(事情对象)只要点击获取目标的内容值
  handleBlur = (event) => {
    console.log(event.target.value);
  };
  render() {
    return (
      <div>
        {/* <input type="text" ref="stringRef" /> 第一种准备弃用的*/}
        {/* <input type="text" ref={(input) => (this.funcRef = input)} />ref={(直接挂载input)} */}
        <input type="text" ref={this.createRef} />
        <button onClick={this.handleClick}>点击按钮提示数据</button>
        <input
          type="text"
          placeholder="失去焦点获得信息"
          onBlur={this.handleBlur}
        />
        <Child ref={this.childRef} />
      </div>
    );
  }
}
