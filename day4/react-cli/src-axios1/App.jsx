import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  state = {
    isLoading: false,
    repo: {},
  };
  async componentDidMount() {
    try {
      //更新数据
      this.setState({
        isLoading: true,
      });
      //请求中
      const result = await axios({
        method: "GET",
        url: "/repo",
      });
      if (result.data.code === 0) {
        this.setState({
          repo: result.data.data.items[0],
          isLoading: false,
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    const { isLoading, repo } = this.state;

    return (
      <div>
        {isLoading ? (
          <h1>loading...</h1>
        ) : (
          <h1>
            most star repo is <a href={repo.html_url}>{repo.name}</a>
          </h1>
        )}
      </div>
    );
  }
}
