<script setup lang="ts">
import {nextTick, ref} from "vue";

const message = ref<string>('张三')
const div = ref<HTMLElement>()
const change = async () => {
  message.value = '张三李四'
  await nextTick()
  console.log(div.value?.innerText)
}
</script>

<template>
  <div>
    <input type="text" v-model="message">
    <div ref="div">{{ message }}</div>
    <button @click="change">change</button>
  </div>
</template>

<style scoped lang="less">

</style>