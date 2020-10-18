//引入React
import React, { Component } from "react";
//声明接收
import PropTypes from "prop-types";

export default class List extends Component {
  //接收数据,声明接收，限制类型值
  static propTypes = {
    todol: PropTypes.number.isRequired,
    isCheckednum: PropTypes.number.isRequired,
  };

  render() {
    //获取数据
    const { todol, isCheckednum } = this.props;
    return (
      <div>
        <input type="checkbox" className="checkbox" />
        <span>
          已完成 {isCheckednum}/ 全部 {todol}
        </span>
      </div>
    );
  }
}
