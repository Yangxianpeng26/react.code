//常量
import { ADD_COMMENT, DEL_COMMENT } from "./contants";
//声明一个initComments对象，这个就相当于默认数据
const initComments = [
  {
    id: 1,
    name: "huahua",
    content: "i like jingge",
  },
  {
    id: 2,
    name: "jingge",
    content: "i like yangge",
  },
];

// reducers函数名称就是要管理的数据名称
// prevState的默认值就是将来状态的初始化值（因为一上来reducer会被调用，并传入undefined）所以传入默认值initComments
function comments(prevState = initComments, action) {
  //判断他上什么类型
  switch (action.type) {
    //如果是ADD_COMMENT,那么把数据action.data添加如果数据要添加在前面就放在后前就放在后面，然后展开使用的还是原数据，只是我添加进去了
    case ADD_COMMENT:
      return [action.data, ...prevState];
    case DEL_COMMENT:
      //true是保留，false是过滤，我不要保留取反
      return prevState.filter((comment) => comment.id !== action.data);
    default:
      return prevState;
  }
}

export default comments;
