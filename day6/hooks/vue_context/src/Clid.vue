<template>
  <div>
    <p>App</p>
  </div>
</template>
<script>
export default {
  name: "",
  //声明接收
  inject: ["name"],
  mounted() {
    console.log(this.name);
  },
};
</script>
<style lang="less" rel="stylesheet/less" scoped></style>
