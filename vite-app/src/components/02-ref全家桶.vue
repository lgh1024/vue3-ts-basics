<script setup lang="ts">
import {ref, isRef} from "vue";
// ref 支持所有类型，ref 取值和赋值都需要加.value
  /*
  import type {Ref} from 'vue'
  type M = {
    name: string
  }
  const Man = ref<M>({name: '小满'})
  const Man: Ref<M> = ref({name: '小满'})*/
  const Man = ref({name: '小满'})
  const Man2 = {name: '小满'}

  const change = () => {
    Man.value.name = '大满'
    console.log(Man)
    console.log(isRef(Man))
    console.log(isRef(Man2))
  }
</script>

<template>
  <div>
    {{ Man }}
  </div>
  <hr>
  <button @click="change">修改</button>
</template>

<style scoped>
  
</style>