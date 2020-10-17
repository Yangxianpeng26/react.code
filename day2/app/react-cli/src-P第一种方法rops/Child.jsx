import React from "react";
//props
import PropTypes from "prop-types";

class Child extends React.Component {
  render() {
    /* 先获取到数据props */
    const { name, age, sex } = this.props;
    return (
      <ul>
        <li>姓名:{name}</li>
        <li>年龄:{age}</li>
        <li>姓别:{sex}</li>
      </ul>
    );
  }
}
//要组件接收的属性进行类型和必要性
Child.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
Child.defaultProps = {
  sex: "女",
};
export default Child;
