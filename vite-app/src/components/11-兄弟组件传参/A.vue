<script setup lang="ts">
import {defineEmits} from "vue";
import Bus from './Bus'

let flag = false
/*
const emit = defineEmits(['on-click'])
const emitB = () => {
  flag = !flag
  emit('on-click', flag)
}*/
const emitB = () => {
  flag = !flag
  Bus.emit('on-click', flag)
}
</script>

<template>
  <div class="A">
    <button @click="emitB">派发一个事件</button>
  </div>
</template>

<style scoped lang="less">
.A {
  width: 200px;
  height: 200px;
  color: #ffffff;
  background-color: blue;
}
</style>