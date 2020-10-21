import React, { Component } from "react";

import CommentItem from "../CommentItem";
import PubSub from "pubsub-js";

export default class Comment extends Component {
  createRef = React.createRef();

  state = {
    CommentList: [{ id: 1, user: "周星星", conente: "ok" }],
  };
  componentDidMount() {
    //订阅
    this.token = PubSub.subscribe("mssage", (msg, data) => {
      //获取到本来的数据数组，触发消息订阅的时候获取，最新的数据！！！！！不然每次都是第一条数据
      const { CommentList } = this.state;
      console.log(data);
      //设置，更新表单获取传送过来的值
      this.setState({
        //先把原数据展开(展开),表单上的数组data进入把之前的覆盖
        CommentList: [...CommentList, data],
      });
    });
  }

  delList = (id) => {
    const { CommentList } = this.state;
    // 不建议直接修改原数据，建议产生一份全新数据
    this.setState({
      CommentList: CommentList.filter((item) => item.id !== id),
    });
  };
  //
  componentWillUnmount() {
    // 解绑消息
    PubSub.unsubscribe(this.token);
  }

  render() {
    const { CommentList } = this.state;

    return (
      <div>
        <div className="col-md-8">
          <h3 className="reply">评论回复：</h3>
          <h2
            style={{ display: !CommentList.length ? "block" : "none" }}
            ref={this.createRef}
          >
            暂无评论，点击左侧添加评论！！！
          </h2>
          <ul className="list-group">
            <CommentItem CommentList={CommentList} delList={this.delList} />
          </ul>
        </div>
      </div>
    );
  }
}
