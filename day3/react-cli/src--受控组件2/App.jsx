import React, { Component } from "react";

export default class App extends Component {
  /* constructor(props){
    super(props)
    console.log();
  } */
  //设置初始值
  state = {
    username: "",
    password: "",
  };
  handleUser = (e) => {
    //修改
    this.setState({
      username: e.target.value,
    });
  };
  handlePassword = (e) => {
    //修改值
    this.setState({
      password: e.target.value,
    });
  };
  handelChange=(key)=>{
    return (event)=>{
      this.setState({
        [key]:event.target.value
      })
    }
  }

  
  //点击事件获取内容框的值
  handleSubmit = (event) => {
    //先防止默认事件
    event.preventDefault();
    const { username, password } = this.state;
    console.log(password, username);
  };
  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        用户名:
        <input type="text" value={username} onChange={this.handelChange('username')} />
        <button>登录</button>
        密码:
        <input  
          type="password"
          value={password}
          onChange={this.handelChange('password')}
        />
      </form>
    );
  }
}
