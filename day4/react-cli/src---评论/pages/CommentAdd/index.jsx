import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class Users extends Component {
  //设置初始化数据，表单输入内容都保存在这里
  state = {
    user: "", //用户名
    conente: "", //评论
  };

  //获取表单内容 用高阶函数
  handleChange = (key) => {
    return (e) => {
      this.setState({
        [key]: e.target.value,
      });
    };
  };
  //获取到表单内容就收集表单数据
  add = (event) => {
    // 禁止表单的默认行为
    event.preventDefault();
    // 收集表单数据
    const { user, conente } = this.state;
    
    // 订阅消息（绑定事件） ：为了接受别的组件传递的数据
    //绑定一个事件名为mssage的自定义事件
    // 这里将会输出对应设置的ID
    // 这里将会输出对应设置的参数
    this.token = PubSub.publish("mssage", { id: Date.now(), user, conente });
    this.setState({
      user: "", //用户名
      conente: "", //评论
    });
  };
  //收尾工作
  componentWillUnmount() {
    // 解绑消息
    PubSub.unsubscribe(this.token);
  }
  render() {
    const { user, conente } = this.state;
    return (
      <div>
        <div className="col-md-4">
          <form className="form-horizontal">
            <div className="form-group">
              <label>用户名</label>
              <input
                type="text"
                className="form-control"
                placeholder="用户名"
                value={user}
                onChange={this.handleChange("user")}
              />
            </div>
            <div className="form-group">
              <label>评论内容</label>
              <textarea
                className="form-control"
                rows={6}
                value={conente}
                placeholder="评论内容"
                onChange={this.handleChange("conente")}
              ></textarea>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button
                  type="submit"
                  className="btn btn-default pull-right"
                  onClick={this.add}
                >
                  提交
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
