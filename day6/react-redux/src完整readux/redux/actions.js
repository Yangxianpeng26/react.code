import { INCREMENT, DECREMENT } from "./contants";

export const increment = (num) => ({ type: INCREMENT, data: num });
export const decrement = (num) => ({ type: DECREMENT, data: num });

//异步actioncreator(返回一个函数)
export const incrementAsync = (Number) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(Number));
    }, 1000);
  };
};
