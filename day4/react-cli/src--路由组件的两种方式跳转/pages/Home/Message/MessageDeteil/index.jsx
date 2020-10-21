import React, { Component } from "react";

export default class MessageDeteil extends Component {
  render() {
    //获取params参数。用id路径占位符参数
    const id = this.props.match.params.id;
    console.log(id);
    return (
      <div>
        <ul>
          <li>id:{id}</li>
        </ul>
      </div>
    );
  }
}
