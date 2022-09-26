<script setup lang="ts">
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onRenderTracked, onRenderTriggered,
  onUnmounted,
  onUpdated,
  ref
} from "vue";
  // beforeCreate、created这两个钩子在setup语法糖模式是没有的，可以用setup去代替
  // onBeforeMount---读不到dom，onMounted---可以读到dom
  // onBeforeUpdate---获取的是更新之前的dom，onUpdated---获取的是更新之后dom
  console.log('setup')
  const str = ref<string>('小满')
  const div = ref<HTMLDivElement>()
  const change = () => {
    str.value = '我被改了'
  }
  // 创建
  onBeforeMount(() => {
    console.log('onBeforeMount-创建之前===>', div.value)
  })
  onMounted(() => {
    console.log('onMounted-创建完成===>', div.value)
  })
  // 更新
  onBeforeUpdate(() => {
    console.log('onBeforeUpdate-更新之前===>', div.value?.innerText)
  })
  onUpdated(() => {
    console.log('onUpdated-更新完成===>', div.value?.innerText)
  })
  // 销毁
  onBeforeUnmount(() => {
    console.log('onBeforeUnmount-销毁之前')
  })
  onUnmounted(() => {
    console.log('onUnmounted-销毁完成')
  })
  onRenderTracked(e => {
    console.log(e)
  })
onRenderTriggered(e => {
  console.log(e)
})
</script>

<template>
  <div>
    <h3>我是Child组件</h3>
    <div ref="div">{{ str }}</div>
    <button @click="change">修改Str</button>
  </div>
</template>

<style scoped>
  
</style>