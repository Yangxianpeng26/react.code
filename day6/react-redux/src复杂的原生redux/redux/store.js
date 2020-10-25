/* 
  store是用来存储所有的数据
  读取数据，更新数据都在这里
*/

import { createStore } from "redux";

import reducers from "./reducers";

//创建一个store对象
const store = createStore(reducers);

export default store;
