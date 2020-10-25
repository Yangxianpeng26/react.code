function checkType(target) {
  //检测类型,
  return Object.prototype.toString.call(target).slice(8, -1);
}

function deepClones(target) {
  //检测target检测checkType数据类型，会返回他检测后的值
  const Type = checkType(target);
  let result = null;
  //判断是对象还是数组
  if (Type === "Object") {
    result = {};
  } else if (Type === "Array") {
    result = [];
  } else {
    return target;
  }

  for (const key in target) {
    const value = target[key];
    result[key] = deepClones(value);
  }
}
