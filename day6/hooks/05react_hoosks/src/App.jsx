import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

//工厂模式
export default function App() {
  /* 
    useState用来使用状态数据
  React.useState(0)用来给工厂函数数组组件使用state
  const[count,setCount]=React.useState(defaultValue)
    state就是状态数据
    setState就是更新状态数据的方法
    defaultValu就是状态数据的初始值

  React.useEffect()用来给工厂函数组件使用生命周期

  */
  const [count, setCount] = useState(0);

  //componentDidMount
  // useEffect(()=>{},[])



  //函数做为参数
  useEffect(() => {
    /* 
    渲染之后和数据更新之后
    相当于componentDidMount和componentDidupdata的结合体
    
    */
    console.log("useEffect");

    return () => {
      //componentDidUpdata,比上面函数先触发
      //componentWillUnmount
      console.log("cb");
    };
    //第二个参数是数组,数组中放置当前函数的依赖的值，如果依赖的值发生变量，就重新触发
    //如果没有变化，就不会变化
  }, [count]);
  console.log("1111");

  //将来又要定义状态把钩子再调用
  // const [num, setNum] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    //销毁
    // ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  };

  return (
    <div>
      <p>count:{count}</p>
      <button onClick={handleClick}>按钮</button>
    </div>
  );
}
