<script setup lang="ts">
import {inject, ref, Ref} from 'vue'

let data = inject<Ref<boolean>>('flag', ref(false))
const changeFlag = () => {
  data.value = !data.value
}
</script>

<template>
  <div>
    <div class="B">
      <h1>我是B组件</h1>
      <button @click="changeFlag">change flag</button>
      <div>
        {{ data }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.B {
  width: 200px;
  height: 200px;
  background-color: green;
  color: #fff;
}
</style>