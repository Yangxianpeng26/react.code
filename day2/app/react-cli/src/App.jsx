import React, { Component } from "react";
//引入样式文件
import Header from "./views/Header";
import List from "./views/List";
import Footer from "./views/Footer";

import "./App.css";

export default class App extends Component {
  //先初始化数据
  state = {
    todos: [
      { id: 1, content: "周星驰", isChecked: false },
      { id: 2, content: "周润发", isChecked: true },
      { id: 3, content: "周某人", isChecked: false },
    ],
  };

  // 添加todo
  addTodo = (content) => {
    const { todos } = this.state;
    // 不建议直接修改原数据，建议产生一份全新数据
    this.setState({
      todos: [{ id: Date.now(), content, isChecked: false }, ...todos],
    });
  };
  //更新数据
  updateTodo = (id) => {
    //先获取所有
    const { todos } = this.state;
    //不建议改变原来数据，建议产生一份新数据
    this.setState({
      todos: todos.map((todo) => {
        //判断todo的id是不是我传过来的id
        if (todo.id === id) {
          return {
            //原数据展开
            ...todo,
            //把他的值改变
            isChecked: !todo.isChecked,
          };
        }
        return { ...todo };
      }),
    });
    console.log(todos);
  };
  render() {
    //获取到todos数据
    const { todos } = this.state;
    //统计计算
    const todol = todos.length;
    //统计已完成的数量
    //previous上一次的返回值初始化0 current当前的值
    const isCheckednum = todos.reduce((previous, current) => {
      return previous + (current.isChecked ? 1 : 0);
    }, 0);

    return (
      <div className="container">
        <Header addTodo={this.addTodo} />
        <List todos={todos} updateTodo={this.updateTodo} />
        <Footer todol={todol} isCheckednum={isCheckednum} />
      </div>
    );
  }
}
