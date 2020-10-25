//创建一个createStore对象
import { createStore, applyMiddleware } from "redux";
//发送异步的中间件
import thunk from "redux-thunk";
// 查看 Redux 中状态变化
import { composeWithDevTools } from "redux-devtools-extension";
//引入reducers
import reducers from "./reducers";
//声明一个middleware 使用中间件
let middleware = applyMiddleware(thunk);
// ?????判断常量开发环境
if (process.env.NODE_ENV === "development") {
  middleware = composeWithDevTools(middleware);
}

// 暴露出去
export default createStore(reducers, middleware);
