//引入React
import React, { Component } from "react";
//PropTypes限制类型,引入一个库
import PropTypes from "prop-types";

import "./index.css";
import Item from "../Item";

export default class List extends Component {
  //接收主组的todos限制类型设置必须的
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
  };

  render() {
    //获取totod数据
    const { todos, updateTodo, delTodo } = this.props;

    return (
      <ul className="list">
        {/* 花括号代码我要在这里面写js代码 */}
        {todos.map((todo) => {
          return (
            <Item
              key={todo.id}
              todo={todo}
              updateTodo={updateTodo}
              delTodo={delTodo}
            />
          );
        })}
      </ul>
    );
  }
}
