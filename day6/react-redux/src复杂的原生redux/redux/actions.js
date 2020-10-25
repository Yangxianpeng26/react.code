export const increment = (num) => ({ type: "increment", data: num });
export const decrement = (num) => ({ type: "decrement", data: num });
// 要定义多少个action函数：看要对数据有多少种操作
// function increment(num) {
//   return {
//     type: 'increment', // 要对数据操作的类型：加、减
//     data: num // 参与更新的数据
//   }
// }
