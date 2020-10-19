import React, { Component } from "react";

export default class App extends Component {
  state = {
    username: "",
    password: "",
  };
  handleUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  //禁示默认事件
  handleSubmit = (e) => {
    e.preventDefault();
    //收集表单数据
    const { username, password } = this.state;
    console.log(password, username);
  };
  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        用户名:
        <input type="text" value={username} onChange={this.handleUsername} />
        密码:
        <input
          type="password"
          value={password}
          onChange={this.handlePassword}
        />
        <button type="submit">登录</button>
      </form>
    );
  }
}
