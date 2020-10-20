import React, { Component } from "react";
import PropTypes from "prop-types";
//引入样式文件

export default class Footer extends Component {
  static propTypes = {
    todol: PropTypes.number.isRequired,
    isCheckednum: PropTypes.number.isRequired,
    handleCheckAll: PropTypes.func.isRequired,
    batchDel: PropTypes.func.isRequired,
  };

  check = (event) => {
    const checked = event.target.checked;
    //直接使用接收回来的数据
    this.props.handleCheckAll(checked);
  };

  render() {
    const { todol, isCheckednum, batchDel } = this.props;
    const isCheckAll = todol === isCheckednum && todol > 0;
    return (
      <div>
        <input
          className="checkbox"
          type="checkbox"
          checked={isCheckAll}
          onChange={this.check}
        />
        <span>
          已完成 {isCheckednum}/ 全部{todol}
        </span>
        <button
          onClick={batchDel}
          style={{
            marginLeft: 30,
            background: "red",
            display: isCheckednum ? "block" : "none",
          }}
        >
          批量删除
        </button>
      </div>
    );
  }
}
