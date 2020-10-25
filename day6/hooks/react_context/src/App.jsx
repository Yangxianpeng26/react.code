// @ts-nocheck
import React, { Component } from "react";
import Father from "./Father";

import context from "./context";

export default class App extends Component {
  render() {
    const person = { name: "彭金利" };
    return (
      <context.Provider value={person}>
        App..
        <Father />
      </context.Provider>
    );
  }
}
