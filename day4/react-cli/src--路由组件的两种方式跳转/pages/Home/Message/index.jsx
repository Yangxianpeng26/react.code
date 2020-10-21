import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import MessageDeteil from "../Message/MessageDeteil";

export default class Message extends Component {
  state = {
    messages: [],
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        messages: [
          { id: 1, content: "message1" },
          { id: 3, content: "message3" },
          { id: 5, content: "message5" },
        ],
      });
    }, 1000);
  }

  /* 
    路由跳转有两种方式:
      路由链接导航
        Link,NavList
      编程式导航
       history.push, replace,back goback这种

       什么时候使用:
          路由链接导航,如果是直接跳转直接显示的用路由链接导航
          编程式导航，如果是显示完了还要做某一些事情(发请示,异步，保存数据)


  
  
  */

  push = (push) => {
    return () => {
      this.props.history.push(push, { name: "huahua", age: 1000000 });
    };
  };

  replace = (replace) => {
    return () => {
      this.props.history.replace(replace);
    };
  };
  back = () => {
    this.props.history.goBack();
  };
  forword = () => {
    this.props.history.goForward();
  };

  render() {
    const { messages } = this.state;
    console.log(messages);
    return (
      /* 

      项目 一步:初始化数据，用来以后遍历展示
          二步:模拟发请求。模块渲染后 更改数据，拿到数据
          三步写出静态页面
          四步:获取数据将页面动态展示
      
      */
      <>
        <ul>
          {messages.map(({ content, id }) => {
            const path = `/home/message/${id}?name=lily`;
            return (
              <li key={id}>
                <Link to={path}>{content}</Link>
                {/* 
                  如果使用高阶函数,在这里函数上来就调用了,上面就走了,我想点击才触发,用高阶函数
                  外部给内部函数传参我一上来就自动给{this.psuh}，目的是为了给内部传参的，传这个要跳转的路径，然后内部就可以跳转了，内部才是事件回调函数点击按键触发的函数跳转，path是来自你上一次传的参

                */}
                <button onClick={this.push(path)}>push</button>
                <button onClick={this.replace(path)}>replace</button>
              </li>
            );
          })}
        </ul>

        <button onClick={this.back}>back</button>
        <button onClick={this.forword}>forword</button>
        {/* 
          路由传参：
          params参数：
            路径定义占位符 :
             <Route path="/home/message/:id" component={MessageDeteil}></Route>
            组件通过this.props.match.params.id

            query:
            输入： const path = `/home/message/${id}?name=lily`;
            使用：this.location.search

            state方法
            在这里面是传送给messagesDetell的点击push方法后显示
            传送参数 
             this.props.history.push(push, { name: "huahua", age: 1000000 });
            使用参数
            this.location.state

            凡是通过Route加载的组件，内部都可以获取到这三个属性
            histor路由跳转
            location 获取query,state参数和当前地址
            match   params参数：

            
        */}
        <Route path="/home/message/:id" component={MessageDeteil}></Route>
      </>
    );
  }
}
