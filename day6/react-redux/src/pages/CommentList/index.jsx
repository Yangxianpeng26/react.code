import React, { Component } from "react";

import { connect } from "react-redux";

import CommentIten from "./CommentIten";

class CommentList extends Component {
  render() {
    const { comments } = this.props;
    return (
      <div>
        <div className="col-md-8">
          <h3 className="reply">评论回复：</h3>
          <h2 style={{ display: comments.length ? "none" : "block" }}>
            暂无评论，点击左侧添加评论！！！
          </h2>
          <ul className="list-group">
            {comments.map((comment) => {
              return <CommentIten comment={comment} key={comment.id} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

//list组件要数据state 要的是comments值是state。未来可以接收这个数据，list不用更新数据方法null
export default connect((state) => ({ comments: state }), null)(CommentList);
