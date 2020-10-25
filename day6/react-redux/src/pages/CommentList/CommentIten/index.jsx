import React, { Component } from "react";
import { connect } from "react-redux";
import { delComment } from "../../../readux/actions";

class CommentItem extends Component {
  del = () => {
    this.props.delComment(this.props.comment.id);
  };

  render() {
    const { name, content } = this.props.comment;
    return (
      <div>
        <li className="list-group-item">
          <div className="handle">
            <button
              onClick={this.del}
              style={{
                backgroundColor: "transparent",
                outline: "none",
                width: 50,
                color: "skyblue",
                border: "none",
              }}
            >
              删除
            </button>
          </div>
          <p className="user">
            <span>{name}</span>
            <span>说:{content}</span>
          </p>
          <p className="centence">React不错!</p>
        </li>
      </div>
    );
  }
}
export default connect(null, { delComment })(CommentItem);
