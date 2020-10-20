import React, { Component } from "react";

export default class App extends Component {
  //初始数据
  state = {
    password: "",
    username: "",
  };
  handleUse = (e) => {
    //修改内容
    this.setState({
      username: e.target.value,
    });
  };
  handlePassword = (e) => {
    //修改内容会改变数据
    this.setState({
      password: e.target.value,
    });
  };

  //复用封装函数
  //高阶函数
  //onChange事件一定要绑定一个函数
  handleChange = (key) => {
    return (event) => {
      this.setState({
        [key]: event.target.value,
      });
    };
  };

  //点击事件，防止默认事件
  handleSubmit = (event) => {
    //防止默认事件
    event.preventDefault();
    //获取数据
    const { username, password } = this.state;
    //当点击里获取数据
    console.log(username, password);
  };
  render() {
    const { password, username } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        用户名:
        <input
          type="text"
          value={username}
          onChange={this.handleChange("username")}
        />
        <button type={"submit"}>登录</button>
        密码:
        <input
          type="password"
          value={password}
          onChange={this.handleChange("password")}
        />
      </form>
    );
  }
}
