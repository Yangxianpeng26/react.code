import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "../Item";
//引入样式文件

import "./index.css";

export default class List extends Component {
  //接收数据，限制类型
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updataTodo: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
  };

  render() {
    //获取到数据
    const { todos, updataTodo, delTodo } = this.props;
    return (
      <ul className="list">
        {todos.map((todo) => {
          return (
            <Item
              key={todo.id}
              todo={todo}
              updataTodo={updataTodo}
              delTodo={delTodo}
            />
          );
        })}
      </ul>
    );
  }
}
