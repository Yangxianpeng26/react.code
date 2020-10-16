import React from "react";
//用ES6语法
//在React控制界面发生变化，就要改变内容
class App extends React.Component {
  //使用父类的方法construter,也就是组件的实例化Component
  /* constructor(props) {
    super(props); //用extends语法中必须要写super
   
  } */

   //设置一个状态数据
   state = {
    //设置标记为默认
    isLickMe: !true,
  };

  heleclick = () => {
     //获取到state的值
     const { isLickMe } = this.state,
    //setStast改变状态数据
    this.setState({
      isLickMe: !isLickMe,
    });
  };

  //渲染的函数除了生命周有this，他指向组件对象，其他函数都是没有this，用箭头函数
  render() {
   
      

    return <h1 onClick={this.heleclick}>{this.state.isLickMe ? "我喜欢你" : "你喜欢我"}</h1>;
  }
}

export default App;
