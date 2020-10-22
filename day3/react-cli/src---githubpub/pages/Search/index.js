import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class Search extends Component {
  //初始数据
  state = {
    searchName: "",
  };

  search = () => {
    //获取数据再进行判断
    const { searchName } = this.state;
    //
    if (!searchName) {
      alert("111");
    }
    //发报消息，将searchName给List组件
    PubSub.publish("search", searchName);
  };
  //点击后更新数据
  updataSearch = (e) => {
    this.setState({
      searchName: e.target.value.trim(),
    });
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            type="text"
            value={this.state.searchName}
            onChange={this.updataSearch}
            placeholder="enter the name you search"
          />
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
