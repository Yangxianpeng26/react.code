import React, { Component } from "react";
import ReactDom from "react-dom";

export default class App extends Component {
  //数据初始化
  state = {
    opacity: 1,
  };
  componentDidMount() {
    this.timeId= setInterval(() => {
      const { opacity } = this.state;
      let newOpacity = opacity - 0.01;
      if (newOpacity <= 0) {
        newOpacity = 1;
      }
      //修改内容值
      this.setState({
        opacity: newOpacity,
      });
    }, 1000 / 60);
  }
  componentWillUnmount() {
    clearInterval(this.timeId);
  }
  Click = () => {
    ReactDom.unmountComponentAtNode(document.getElementById("root"));
  };
  render() {
    const { opacity } = this.state;
    return (
      <>
        <h1 style={{ opacity }}>React学不会呀</h1>
        <button onClick={this.Click}>继续学</button>
      </>
    );
  }
}
