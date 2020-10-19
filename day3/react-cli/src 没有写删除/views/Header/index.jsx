import React, { Component } from "react";
import PropTypes from "prop-types";
//引入样式文件

import "./index.css";

export default class Header extends Component {
  //接收数据
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  }; 

  add = (event) => {
    //判断按键是否是确定键
    if (event.keyCode !== 13) return;
    //获取方本框内容
    const content = event.target.value.trim();
    //获取文本内容，如果内容为空就false
    if (!content) return;
    //添加todos
    this.props.addTodo(content);
    //清空文本框
    event.target.value = "";
  };

  render() {
    return (
      <input
        onKeyUp={this.add}
        className="header"
        type="text"
        placeholder="请输入代办事项，按回车键确认"
      />
    );
  }
}
