import React, { PureComponent } from "react";

export default class App extends PureComponent {
  //初始化数据
  state = {
    username: "",
    password: "",
  };
  //阻止默认事件
  handleSubmit = (e) => {
    e.preventDefault();
    //获取表单内容
    const { username, password } = this.state;
    //打印显示
    console.log(username, password);
  };
  //文本框改变
  handleUsern = (event) => {
    //更新数据
    this.setState({
      username: event.target.value,
    });
  };
  handlePassword = (event) => {
    //更新数据
    this.setState({
      password: event.target.value,
    });
  };
  //高阶函数
  //封装一个可以利用的方法,key闭包保存了value值,输入的值全部被保存在闭包里面
  handleChange = (key) => {
    return (e) => {
      this.setState({
        [key]: e.target.value,
      });
    };
  };
  /* 
  
  a.受控组件: 通过state和onChange事件的方式来自动收集表单数据
b.非受控组件: 需要时才通过ref收集表单数据
  */
  render() {
    //获得初始化数据
    const { username, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={this.handleChange("username")}
        />
        <button type={"submit"}>登录</button>
        <input
          type="password"
          value={password}
          onChange={this.handleChange("password")}
        />
      </form>
    );
  }
}
