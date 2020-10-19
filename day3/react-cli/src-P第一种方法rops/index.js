//是wwebpack要打包的文件也是入口文件
//引入React
import React from 'react'
//引入Reactdom
import ReactDOM from 'react-dom'
//引入App.js
import App from './App'

//使用
ReactDOM.render(<App/>,document.getElementById('root'))