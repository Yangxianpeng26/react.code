import React, { Component } from "react";
import "./App.css";
//引入所有的子组件
import Header from "./views/Header";
import List from "./views/List";
import Footer from "./views/Footer";

export default class App extends Component {
  //初始数据,等于的都是在实例化对象上
  state = {
    todos: [
      { id: 1, content: "吃饭", isChecked: false },
      { id: 2, content: "睡觉", isChecked: true },
      { id: 3, content: "打豆豆", isChecked: false },
    ],
  };
  //接收content,添加addTodo,函数的参数就是看我这个函数有多少个不确定的量，有一个就定义一个，有多个定义多个
  addTodo = (content) => {
    //拿到当前的数据
    const { todos } = this.state;
    //React不建议改变原数据,建议产生新数据
    //更新数据要一定要用setState方法
    this.setState({
      //要更新的是todos,用数组包裹向前插入一条数据用扩展运算，展开当前要更新的数据，在前面用对象方式添加,d原来的todos没有发生改变,产生了全新的数组
      todos: [{ id: Date.now(), content, isChecked: false }, ...todos],
    });
  };
  //更新todos
  updateTodo = (id) => {
    //获取数据
    const { todos } = this.state;
    //更新数据一定要用setState
    this.setState({
      todos: todos.map((todo) => {
        //判断todo的id是不是我传过来的id
        if (todo.id === id) {
          return {
            //展开原数据
            ...todo,
            //把他的值改了
            isChecked: !todo.isChecked,
          };
        }
        return { ...todo };
      }),
    });
  };

  //先更新数据，删除
  delTodo = (id) => {
    //获取数据
    const { todos } = this.state;
    //更新数据
    this.setState({
      todos: todos.filter((todo) => todo.id !== id),
    });
  };

  //接下来要数据动态展示List要数据，数据在App中通过鼠标属性props
  //下面会重新渲染组件
  render() {
    //获取数据,当前的实例化对象中的state中的todos 但是我通过解构赋值
    const { todos } = this.state;
    //统计所有的数量
    const todol = todos.length;
    //统计已经完成的数量，我要找到ischecked为true的值
    //previous上一次的返回值初始化0 current当前的值
    const isCheckednum = todos.reduce((previous, current) => {
      return previous + (current.isChecked ? 1 : 0);
    }, 0);

    return (
      <div className="container">
        {/* 因为addTodo是实例上的一个方法所以要加一个this */}
        <Header addTodo={this.addTodo} />
        {/* 不用...展开,然我自己遍历展开，通过props传递动态数据,这里面不加this是因为上面解构了*/}
        <List
          todos={todos}
          updateTodo={this.updateTodo}
          delTodo={this.delTodo}
        />
        <Footer todol={todol} isCheckednum={isCheckednum} />
      </div>
    );
  }
}
