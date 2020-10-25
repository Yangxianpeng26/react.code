import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//引入组件来自redux
import { Provider } from "react-redux";
//引入store
import store from "./redux/store";

ReactDOM.render(
  /* 这时候的store就是我组件中store 接管store将来其他组件需要store时，
    这样我们就不用手动引入store了
  
  */
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
