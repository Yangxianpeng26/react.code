/* 
  作用：根据之前的状态和action对象来计算生成最新的数据
  内部接受上一次的值和这一次的值，开始得到newState，将newState return出去
  // redux为了获取状态的初始值，一上来会调用一次count方法
// 调用时第一个参数是 undefined {type: xxx}
*/

function count(prevState = 0, action) {
  switch (action.type) {
    case "increment":
      return prevState + action.data;
    case "decrement":
      return prevState - action.data;
      default:
      return prevState
  }
}

export default count;
