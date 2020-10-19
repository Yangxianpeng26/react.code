//引入React
import React from "react";
import { Component } from "react";
import PropsTypes from "prop-types";

export default class Cild extends Component {
  //设置限制和必须，传递参数
  // static 静态的：给类定义直接属性和方法
  // 如果不用static定义，就是给类的原型定义属性和方法是给原型对象用的
  //类的原型上是为了给实例对象用的，而类的直接方法不是实例对象用的，
  //实例对象只能隐式原型得到构造函数的显式原型上的东西.直接是获取不到的
  //所以static是为类服务
  
  static propTypes = {
    name: PropsTypes.string.isRequired,
    age: PropsTypes.number.isRequired,
    sex: PropsTypes.string.isRequired,
  };
  //默认如果App组件中没有写
  static defaultProps = {
    sex: "女",
  };
  //渲染函数
  render() {
    //读取到Props
    const { name, age, sex } = this.props;
    return (
      <ul>
        <li>姓名:{name}</li>
        <li>年龄:{age}</li>
        <li>性别:{sex}</li>
      </ul>
    );
  }
}
