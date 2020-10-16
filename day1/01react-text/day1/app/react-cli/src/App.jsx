//要用什么就要引入什么,引入React
import React from "react";
//使用SE6语法
class App extends React.Component {
  /* constructor(props) {
    super(props);
    //设置一个状态数据
    
  } */

  state = {
    isLiekMe: !true,
  };

  handleclick = () => {
    //获取state的值
    const { isLiekMe } = this.state;
    //箭头函数
    //设置状态数据
    this.setState({
      isLiekMe: !isLiekMe,
    });
  };

  //在React中除去生命周期有this,指向组件实例，其他函数的this是undefied,所以用了箭头函数，箭头函数的this指向谁调用他就指向谁
  render() {
    return (
      <h1 onClick={this.handleclick}>
        {this.state.isLiekMe ? "你喜欢我" : "我喜欢你"}
      </h1>
    );
  }
}

export default App;
