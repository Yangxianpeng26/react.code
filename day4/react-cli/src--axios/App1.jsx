import React, { Component } from "react";
//引入,下载saiox组件库
import axios from "axios";

export default class App extends Component {
  //初始值
  state = {
    isLOdaing: false,
    repo: {},
  };
  async componentDidMount() {
    try {
      // 发送请求之前，更新loading
      this.setState({
        isLoading: true,
      });
      const result = await axios({
        url: "/repo",
        /*
          GET    查
          POST   增
          PUT    改（全部修改）
          PATCH  改（局部修改）
          DELETE
        */
        method: "GET",
      });

      if (result.data.code === 0) {
        this.setState({
          repo: result.data.data.items[0],
        });
      }

      // const result = await fetch("/repo").then((res) => res.json());

      // console.log(result);
      /* if (result.code === 0) {
        this.setState({
          repo: result.data.items[0],
        });
      } */

      this.setState({
        isLoading: false,
      });
      //  .then()
      //  .catch()
    } catch (e) {
      // 处理错误
      console.log(e);
    }
  }
  render() {
    console.log("render");
    const { isLoading, repo } = this.state;
    return (
      <div>
        {isLoading ? (
          <h1>lodaing....</h1>
        ) : (
          <h2>
            most star repo is <a href={repo.html_url}>{repo.name}</a>
          </h2>
        )}
      </div>
    );
  }
}
