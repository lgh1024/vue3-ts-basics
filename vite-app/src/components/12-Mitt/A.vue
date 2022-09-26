<script  lang="ts" setup="">
import { getCurrentInstance } from "vue";

const instance = getCurrentInstance()

const emit = () => {
  instance?.proxy?.$Bus.emit('on-xiaoman', 'mitt')
  instance?.proxy?.$Bus.emit('on-xiaoman2', 'mitt2')
}
</script>

<template>
  <div>
    <h1>我是A</h1>
    <button @click="emit">emit</button>
  </div>
</template>

<style scoped lang="less">

</style>