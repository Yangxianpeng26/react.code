import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class App extends Component {
  //创建数据初始化
  constructor(props) {
    super(props);
    //打印
    console.log("constructor");
  }
  //创建数据初始化简易
  state = {
    //透明
    opacity: 1,
  };
  //组件渲染之后
  componentDidMount() {
    //清除计时器
    this.timeId = setInterval(() => {
      //获取到opacity
      const { opacity } = this.state;
      //创建一个新来对比
      let newOpacity = opacity - 0.01;
      if (newOpacity <= 0) {
        newOpacity = 1;
      }
      //更新数据
      this.setState({
        opacity: newOpacity,
      });
    }, 1000 / 60);
  }
  //主要做一些收尾工作，清除计时器，解绑事件等
  componentWillUnmount() {
    clearInterval(this.timeId);
  }
  goDie = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  };
  render() {
    const { opacity } = this.state;
    return (
      <div>
        <h1 style={{ opacity }}>React学不会</h1>
        <button onClick={this.goDie}>不活了呀</button>
      </div>
    );
  }
}
