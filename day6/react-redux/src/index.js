import React from "react";

import App from "./App";
/* 
当一个react项目组件层级越来越深,页面越来越多的时候,数据在各个组件层级和页面之间传递的需求就会比较多,很多变量也需要做成可全局管理的
*/
import { Provider } from "react-redux";
import store from "./readux//store";

import ReactDOM from "react-dom";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
