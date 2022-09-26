<script setup lang="ts">
import {provide, ref} from "vue";
import A from './10-依赖注入-provide/A.vue'

const b = ref<boolean>(false)
provide('flag', b)
</script>

<template>
  <div>
    <div class="App10">
      <h1>我是跟组件</h1>
      <div>
        {{ b }}
      </div>
      <A></A>
    </div>
  </div>
</template>

<style scoped lang="less">
.App10 {
  width: 300px;
  height: 300px;
  background-color: red;
  color: #fff;
}
</style>