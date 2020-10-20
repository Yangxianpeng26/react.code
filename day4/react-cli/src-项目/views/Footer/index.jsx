//引入React
import React, { Component } from "react";
//声明接收
import PropTypes from "prop-types";

export default class List extends Component {
  //接收数据,声明接收，限制类型值
  static propTypes = {
    todol: PropTypes.number.isRequired,
    isCheckednum: PropTypes.number.isRequired,
    handleCheckAll: PropTypes.func.isRequired,
    batchDel: PropTypes.func.isRequired,
  };
  check = (event) => {
    //checked选中和未选中
    const checked = event.target.checked;
    //直接使用
    this.props.handleCheckAll(checked);
  };

  render() {
    //获取数据
    const { todol, isCheckednum, batchDel } = this.props;
    //全部的长度是否等于完成的已完成数量，并且全部的长度大于0
    const checkeAll = todol == isCheckednum && todol > 0;
    return (
      <div>
        <input
          type="checkbox"
          className="checkbox"
          /*checked 单选框或多选框 默认被选中 */
          checked={checkeAll}
          onChange={this.check}
        />
        <span>
          已完成 {isCheckednum}/ 全部 {todol}
        </span>
        <button
          onClick={batchDel}
          style={{
            marginLeft: 30,
            background: "red",
            display: isCheckednum ? "block" : "none",
          }}
        >
          删除
        </button>
      </div>
    );
  }
}
