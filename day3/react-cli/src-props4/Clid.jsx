import React, { Component } from "react";
import propTypes from "prop-types";

export default class Clid extends Component {
  //接收数据，限制类型，传递数据的作用
  static propType = {
    name: propTypes.string.isRequired,
    age: propTypes.string.isRequired,
    sex: propTypes.string.isRequired,
  };

  static defaultProps = {
    sex: "女",
  };
  render() {
    //再从static里面的数据解构出来
    const { name, age, sex } = this.props;
    return (
      <ul>
        <li>名字:{name}</li>
        <li>年龄:{age}</li>
        <li>性别:{sex}</li>
      </ul>
    );
  }
}
