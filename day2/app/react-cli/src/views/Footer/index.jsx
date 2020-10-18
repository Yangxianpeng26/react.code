import React, { Component } from "react";
import PropTypes from "prop-types";
//引入样式文件

export default class Footer extends Component {
  static propTypes = {
    todol: PropTypes.number.isRequired,
    isCheckednum: PropTypes.number.isRequired,
  };

  render() {
    const { todol, isCheckednum } = this.props;
    return (
      <div>
        <input className="checkbox" type="checkbox" />
        <span>
          已完成 {isCheckednum}/ 全部{todol}
        </span>
      </div>
    );
  }
}
