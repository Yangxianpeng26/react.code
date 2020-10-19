//引入React
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Child extends Component {
  //限制类型的
  static propTypes = {
    //名字指定字符串是必须的
    name: PropTypes.string.isRequired,
    //年龄指定字符串是必须的
    age: PropTypes.number.isRequired,
    // sex: PropTypes.string.isRequired,
  };
  //如果性别没有指定, 默认为男
  static defaultProps = {
    sex: "女",
  };
  render() {
    //获取props数据
    const { name, age, sex } = this.props;
    return (
      <ul>
        <li>姓名:{name}</li>
        <li>年龄:{age}</li>
        <li>姓别:{sex}</li>
      </ul>
    );
  }
}
