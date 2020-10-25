function checkType(target) {
  //toString他要测谁，this就指向谁，所以用call
  return Object.prototype.toString.call(target).slice(8, -1);
}

function deepClone(target) {
  //检测target检测checkType数据类型，会返回他检测后的值
  const type = checkType(target);

  let result = null;
  //判断他是不是对象
  if (type === "Object") {
    //是对象就是对象
    result = {};
  } else if (type === "Array") {
    //是数组就是数组
    result = [];
  } else {
    //其他类型就原封不动
    return target;
  }

  //forin遍历，对象数据可以遍历
  for (const key in target) {
    //forin遍历出来是key，提取是value属性
    //key如果是数组就是下标，value就是下标对的值
    //key如果是对象就是key是属性名，value是属性值
    const value = target[key];
    //创建一个新数据把key和value
    //数组对象都是用中括号添加
    //这样就可以往这个result添加key添加相对的value值
    // result[key]=value
    result[key] = deepClone(value);
    //因为可能对象也有对象
  }

  return result;
}

const person = { name: "jack", children: [{ name: "yangyang" }] };
const newPerson = deepClone(person);

(newPerson.name = "rose"), newPerson.children.push({ name: "jingge" });

console.log(newPerson);
console.log(person);
