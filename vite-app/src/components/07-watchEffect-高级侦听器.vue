<script setup lang="ts">
import {ref, watchEffect} from "vue";

  let message = ref<string>('飞机')
  let message2 = ref<string>('飞机杯子')
  const stop = watchEffect(() => {
    // 进入页面自动调用一下，不需要设置immediate
    console.log('message---', message.value)
    console.log('message---', message2.value)
  })
  const stopWatch = () => stop()
</script>

<template>
  <div>
    <input type="text" v-model="message">
    <input type="text" v-model="message2">
    <button @click="stopWatch">停止监听</button>
  </div>
</template>

<style scoped>
  
</style>