<script setup lang="ts">

</script>

<template>
  <div class="bg">
    <el-input class="ipt"></el-input>
    <el-button type="primary">Primary</el-button>
  </div>
</template>

<style scoped lang="less">
// scoped 阻止样式穿透

.bg {
  background: black;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  .ipt {
    width: 200px;
   /* // vue2 中使用 /deep/
    /deep/.el-input__inner {
      background: pink;
    }*/
    // vue3 中推荐使用 :deep()
    :deep(.el-input__inner) {
      background: skyblue;
    }
  }
}
</style>