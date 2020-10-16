//引入react按需引入
import React from "react";
//Es6方法创建组件
//在react控制用户界面发生变化,就要控制state
class App extends React.Component {
  constructor(props) {
    //调用父类的constructor也就是React.Component
    super(props); //用了extends语法，就要用super
    //初始化state
    this.state = {
      isLikeMe: true,
    };
  }

  //引入出来了以后就只要创建一次就行了
  //原本函数是有this.但是this指向undefined  所以换箭头函数
  //改成箭头函数，this就是组件实例对象
  //总结:在React中的(render)生命周期的this指向组件实例化,其他函数默认的this指向undefined

  handleclick = () => {
    const { isLikeMe } = this.state;
    this.setState({
      isLikeMe: !isLikeMe,
    });
  };

  render() {
    //读取到state里面的值
    const { isLikeMe } = this.state;
    //因为每次点击的时候就创建一次。创建多次会造成资源浪费
    /* const handleclick=()=>{
      this.setState({
        isLikeMe:!isLikeMe
      });
    } */
    return (
      <h1 onClick={this.handleclick}>{isLikeMe ? "你喜欢我" : "我喜欢我"}</h1>
    );
  }
}

export default App;
