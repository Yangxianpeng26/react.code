import React, { Component } from "react";
import PubSub from "pubsub-js";
import axios from "axios";

export default class List extends Component {
  //因为用户展示是在List所以，最好也是在List初始化数据操作，再把数据给Search
  state = {
    isLoading: false, //请求中
    isFrisview: true, //用户是否显示
    users: [], //用户
  };
  //模块渲染之后
  componentDidMount() {
    //把在Search的发报消息拿到，先引入库
    this.token = PubSub.subscribe("search", async (mas, searchName) => {
      try {
        //把用户是否显示false
        // 请示true
        this.setState({
          isLoading: true, //请求中
          isFrisview: false, //用户是否显示
        });
        //发送请求
        const result = await axios.get(
          `https://api.github.com/search/users?q=${searchName}`
        );
        // console.log(result);
        //获取到数据了就要更新
        this.setState({
          //请求中就不要了
          isLoading: false,
          users: result.data.items.map((user) => {
            return {
              id: user.id,
              login: user.login,
              html_url: user.html_url,
              avatar_url: user.avatar_url,
            };
          }),
        });
        console.log(result.data.items);
      } catch (err) {
        alert("网络异常");
      }
    });
  }

  //解绑事件
  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }
  render() {
    //获取到初始化数据
    const { users, isFrisview, isLoading } = this.state;
    if (isFrisview) {
      return <h1>enter name to search</h1>;
    }
    if (isLoading) {
      return <h1>疯狂请求中...</h1>;
    }
    //如果用户长度为0就提示用户
    if (users.length === 0) {
      console.log(users);
      return <h1>暂无该用户数据</h1>;
    }
    return (
      <div className="row">
        {users.map((user) => {
          return (
            <div className="card" key={user.id}>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                <img src={user.avatar_url} style={{ width: 100 }} alt="img" />
              </a>
              <p className="card-text">{user.login}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
