<script setup lang="ts">

</script>

<template>
  <div>
    我是插槽
    <slot></slot>
  </div>
</template>

<style scoped lang="less">
// :slotted() 插槽选择器：修改插槽里的样式
// :global() 全局选择器：应用到全局
:slotted(.a) {
  color: pink;
}
</style>