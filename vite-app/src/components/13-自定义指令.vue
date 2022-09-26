<script setup lang="ts">
import A from './13-自定义指令/A.vue'
import {Directive, DirectiveBinding, ref} from "vue";
/*
let flag = ref<boolean>(true)
type Dir = {
  background: string
}
const vMove: Directive = {
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  /!*mounted(...args: Array<any>) {
    console.log('mounted', args)
  },*!/
  mounted(el: HTMLElement, dir: DirectiveBinding<Dir>) {
    console.log('mounted')
    el.style.background = dir.value.background
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  },
}
*/

// 函数简写
let value = ref<string>('')
type Dir = {
  background: string
}
const vMove: Directive = (el: HTMLElement, bingding: DirectiveBinding<Dir>) => {
  el.style.background = bingding.value.background
}
</script>

<template>
  <div>
<!--    <button @click="flag = !flag">切换</button>
    <A v-if="flag" v-move:aaa.xiaoman="{ background: 'skyblue' }"></A>-->
    <input v-model="value" type="text" />
    <A v-move="{background: value}"></A>
  </div>
</template>

<style scoped lang="less">

</style>