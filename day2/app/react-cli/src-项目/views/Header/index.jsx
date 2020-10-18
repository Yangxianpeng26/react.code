import React, { Component } from "react";
//接收参数
import PropTypes from 'prop-types'

// 引入样式文件
import "./index.css";

export default class Header extends Component {

  static propTypes={
    addTodo:PropTypes.func.isRequired
  }

  //因为是回车键我要判断他是否是回车键
  add = (event) => {
    //不等于13我返回出去不操作
    if (event.keyCode !== 13) return;
    //等于13获取input里面数据
    //获取收集input数据输入框的内容值 trim前后空格
    const content = event.target.value.trim();
    //给App,因为App更新了，List自然更新，在子向父通信App定义方法传给子组件，子组件再调用去修改父组件数据
    //有方法了，先判断如果是空值我什么也不干
    if(!content) return
    //有数据我再添加todos,因为是别人传给我的属性Addtodos 传入content
    this.props.addTodo(content)
    //清空文本框数据
    event.target.value=''
  };
  render() {
    return (
      <input
        className="header"
        type="text"
        placeholder="请输入代办事项,按回车键确定"
        onKeyUp={this.add}
      />
    );
  }
}
