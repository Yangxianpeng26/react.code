import React, { Component } from "react";

import { Button, Modal } from "antd";

export default class App extends Component {
  state = {
    visible: false,
  };

  handleClick = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = () => {
    console.log("okok");
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
    console.log("222");
  };
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleClick}>
          按钮
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}
