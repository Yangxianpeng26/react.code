/* 

作用;根据之前的状态数据和action对象来计算新生成的数据

*/
import {INCREMENT,DECREMENT} from './contants'
function count(prevState = 0, action) {
  //跟据那个函数创建的类型，判断
  switch (action.type) {
    case INCREMENT:
      return prevState + action.data;
    case DECREMENT:
      return prevState - action.data;
    default:
      return prevState;
  }
}

export default count;
