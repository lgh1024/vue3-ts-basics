<script setup lang="ts">
import {inject} from "vue";
import B from './B.vue'

let data = inject('flag')
</script>

<template>
  <div>
    <div class="A">
      <h1>我是A组件</h1>
      <div>
        {{ data }}
      </div>
      <B></B>
    </div>
  </div>
</template>

<style scoped lang="less">
.A {
  width: 250px;
  height: 250px;
  background-color: blue;
  color: #fff;
}
</style>