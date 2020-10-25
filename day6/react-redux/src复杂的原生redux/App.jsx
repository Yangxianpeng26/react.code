import React, { Component } from "react";
import store from "./redux/store";

import { increment, decrement } from "./redux/actions";

export default class App extends Component {
  state = {
    num: 1,
  };
  handleChange = (e) => {
    this.setState({
      num: +e.target.value,
    });
    // console.log(this.state.num);
  };

  increment = () => {
    //直接用action函数创建action对象
    const action = increment(this.state.num);
    //调用使用store.dispacth(新创建的sction)
    store.dispatch(action);
  };

  decrement = () => {
    //直接用action函数创建action对象
    const action = decrement(this.state.num);
    //调用使用store.dispacth(新创建的sction)
    store.dispatch(action);
  };
  incrementIfodd = () => {
    //读取到所有数据
    const count = store.getState();
    if (count % 2 === 0) return;
    //调用加
    this.increment();
  };
  incrementAsync = () => {
    setTimeout(() => {
      this.decrement();
    }, 1000);
  };
  //渲染之后
  componentDidMount() {
    //绑定store.subscribe，监听stata的变化，一发生变化，内部重新渲染组件
    store.subscribe(() => {
      this.setState({});
    });
  }
  render() {
    //读取到所有数据
    const count = store.getState();

    return (
      <>
        <h1> {count} </h1>
        <select onChange={this.handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfodd}>increment in add</button>
        <button onClick={this.incrementAsync}>decrement async</button>
      </>
    );
  }
}
