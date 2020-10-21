import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CommentItem extends Component {
  static propTypes = {
    CommentList: PropTypes.array.isRequired,
    delList: PropTypes.func.isRequired,
  };
  del = (id) => {
    return () => {
      console.log(id);
      //调用
      this.props.delList(id);
    };
  };
  render() {
    const { CommentList } = this.props;
    

    return (
      <div>
        {CommentList.map((item) => {
          return (
            <li className="list-group-item" key={item.id}>
              <div className="handle">
                <a href="###" onClick={this.del(item.id)}>
                  删除
                </a>
              </div>
              <p className="user">
                <span>{item.user}</span>
                <span>说:</span>
              </p>
              <p className="centence">{item.conente}</p>
            </li>
          );
        })}
      </div>
    );
  }
}
