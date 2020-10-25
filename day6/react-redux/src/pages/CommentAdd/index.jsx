import React, { Component } from "react";

//引入action
import { addComment } from "../../readux/actions";
import { connect } from "react-redux";

class CommentAdd extends Component {
  state = {
    name: "",
    content: "",
  };
  //获取文本框内容
  handleChange = (key) => {
    return (e) => {
      this.setState({
        [key]: e.target.value,
      });
    };
  };

  add = (event) => {
    event.preventDefault();
    const { content, name } = this.state;
    //判断如果没有内容
    if (!name || !content) return;
    //有就添加评论
    this.props.addComment({ id: Date.now(), content, name });
    //更新数据
    this.setState({
      name: "",
      content: "",
    });
  };
  render() {
    const { content, name } = this.state;
    return (
      <>
        <div className="col-md-4">
          <form className="form-horizontal" onSubmit={this.add}>
            <div className="form-group">
              <label>用户名</label>
              <input
                type="text"
                className="form-control"
                placeholder="用户名"
                value={name}
                onChange={this.handleChange("name")}
              />
            </div>
            <div className="form-group">
              <label>评论内容</label>
              <textarea
                className="form-control"
                rows={6}
                placeholder="评论内容"
                value={content}
                onChange={this.handleChange("content")}
              ></textarea>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-default pull-right">
                  提交
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

//第一个参数:将redux中的state数据取出，以props传递给子组件,第二个参数是在action要传递的参数，记得引入actions
export default connect(null, { addComment })(CommentAdd);
