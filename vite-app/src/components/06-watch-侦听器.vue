<script setup lang="ts">
  import {ref, watch} from "vue";

  let message = ref<string>('')
  let message2 = ref<string>('')
  // 侦听一个值直接写，侦听多个值用数组形式
  watch([message, message2], (newVal, oldVal) => {
    console.log('新的', newVal)
    console.log('旧的', oldVal)
  }, {
    deep: true, // 深度监听，reactive不写也可以深度监听
    immediate: true // 进入页面自动调用一下
  })
</script>

<template>
  <div>
    <input type="text" v-model="message">
    <input type="text" v-model="message2">
  </div>
</template>

<style scoped>
  
</style>