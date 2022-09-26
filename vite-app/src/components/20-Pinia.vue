<script setup lang="ts">
import {useTestStore} from "../store";

const Test = useTestStore()
// 1、Test.current++
// 2、Test.$patch({current:888, name:'威威'})
// 3、Test.$patch((state) => {state.current = 999, state.name='帆布包'})
// 4、Test.$state = {current: 2000, name: '张三'}
// 5、action -- Test.setCurrent(456)
const change = () => {
  Test.setCurrent(456)
}
</script>

<template>
  <div>
    pinia:{{ Test.current }} -- {{ Test.name }}
    <button @click="change">change</button>
  </div>
</template>

<style scoped lang="less">

</style>