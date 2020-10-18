import React, { Component } from "react";
import PropTypes from "prop-types";
//引入样式文件

import "./index.css";

export default class List extends Component {
  //接收数据，限制类型
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
  };
  //文框
  update = (id) => {
    return () => {
      this.props.updateTodo(id);
    };
  };
  render() {
    //获取到数据
    const { todos } = this.props;
    return (
      <ul className="list">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                onChange={this.update(todo.id)}
                className="checkbox"
                type="checkbox"
                checked={todo.isChecked}
              />
              <span>{todo.content}</span>
            </li>
          );
        })}
      </ul>
    );
  }
}
