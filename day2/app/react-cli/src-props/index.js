//本组件他是webpack要打包的文件也是入口y文件
//引入React
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
//引入App.js

import App from './App'

//渲染到指定容器中
ReactDOM.render(<App/>,document.getElementById('root'))