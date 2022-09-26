<script setup lang="ts">
  import Child from './08-生命周期/Child.vue'
  import {ref} from "vue";
  const flag = ref<Boolean>(true)
</script>

<template>
  <div>
    <h1>生命周期</h1>
    <!--<Child />-->
    <Child v-if="flag"></Child>
    <button @click="flag = !flag">创建-销毁</button>
  </div>
</template>

<style scoped>
  
</style>