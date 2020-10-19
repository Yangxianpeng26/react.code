//引入React
import React, { Component } from "react";
//PropTypes限制类型,引入一个库
import PropTypes from "prop-types";

export default class item extends Component {
  //执行函数返回一个函数==高阶函数==闭包
  //onChange事件
  update = (id) => {
    //获取到id值
    //返回的是一个onChange的回调函数，函数嵌套，内部引用外部的局部变量，接着外部的函数被调用了，所以产生闭包，闭包里面放有一个id值，在React会经常样传参
    return () => {
      //我要把id传给App,在App有一个方法，子组件向父组件传参，父组件定义一个方法，把方法给子组件，子组件调用
      // console.log(id);
      this.props.updataTodo(id);
    };
  };
  //接收主组的todos限制类型设置必须的
  static propTypes = {
    todo: PropTypes.object.isRequired,
    updataTodo: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
  };

  state = {
    isShowbtn: false,
  };

  //鼠标移入移出事件
  switchBtn = (isShow) => {
    return () => {
      //设置数据
      this.setState({
        isShowbtn: isShow,
      });
    };
  };
  //删除
  del = () => {
    //第一个括号解构this.props得到todo,第二个括号解构todo得到id，把id的值重新命名为a
    /* const {todo:{id:a},}=this.props */
    //获取到id
    const { id } = this.props.todo;
    window.confirm("你是否要删除吗？");
    this.props.delTodo(id);
  };

  render() {
    //获取totod数据
    const { todo } = this.props;
    //获取state让显示或者隐藏
    const { isShowbtn } = this.state;
    return (
      <li
        key={todo.id}
        onMouseEnter={this.switchBtn(true)}
        onMouseLeave={this.switchBtn(false)}
      >
        <input
          onChange={this.update(todo.id)}
          type="checkbox"
          className="checkbox"
          /*checked才是要他选中还是不选中  */
          checked={todo.isChecked}
        />
        <span>{todo.content}</span>
        <button
          onClick={this.del}
          style={{
            marginLeft: 30,
            background: "red",
            display: isShowbtn ? "block" : "none",
          }}
        >
          删除
        </button>
      </li>
    );
  }
}
