import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  //初始值
  state = {
    isLoading: false,
    repo: {},
  };
  async componentDidMount() {
    try {
      //在发送请示前修改状态
      this.setState({
        isLoading: true,
      });
      const result = await axios({
        url: "/repo",
        method: "GET",
      });
      if (result.data.code === 200) {
        this.setState({
          repo: result.data.data.item[0],
        });
      }
    } catch (err) {
      console.log("错误");
    }
  }
  render() {
    const { isLoading, repo } = this.state;
    return (
      <div>
        {isLoading?<h1>loading</h1>:<h2>
            most star repo is <a href={repo.html_url}>{repo.name}</a>
          </h2>}
        
      </div>
    );
  }
}
