import React, { PureComponent } from "react";

export default class App extends PureComponent {
  //创建初始化数据
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  //可能会触发多次
  UNSAFE_componentWillMount() {
    console.log("componentDidMount");
  }

  //发送请求，绑定事件设置定时器等一次性任务
  componentDidMount() {
    console.log("componentDidMount");
  }
  //可能会触发多次
  UNSAFE_componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }

  // 性能优化
  shouldComponentUpdate(nextState, nextProps) {
    console.log("shouldComponentUpdate");
    // 决定组件是否更新
    // 返回值true，代表要更新
    // 返回值false，代表不更新
    // 决定组件要不要更新？看数据（state，props）是否发生变化
    // 只要state，props有一个发生变化，就要更新
    console.log(this.state);
    console.log(this.props);

    return true;
  }
  //可能会触发多次
  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  //模块渲染结束
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  //收尾工作，清除定时器，解绑事件
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  updata = () => {
    this.setState({});
    this.forceUpdate(() => {
      return {};
      /*  //清除root
      ReactDOM.unmountComponentAtNode(document.getElementById("root")); */
    });
  };
  render() {
    console.log("render");
    return <div onClick={this.updata}>APP</div>;
  }
}
