<script setup lang="ts">
import {onMounted, ref} from "vue";

let speed = ref<number>(1)
let bar = ref<HTMLElement>()
let timer = ref<number>(0)
const startLoading = () => {
  let dom = bar.value as HTMLElement
  speed.value = 1
  timer.value = window.requestAnimationFrame(function fn() {
    if(speed.value < 90) {
      speed.value += 1
      dom.style.width = speed.value + '%'
      timer.value = window.requestAnimationFrame(fn)
    } else {
      speed.value = 1
      window.cancelAnimationFrame(timer.value)
    }
  })
}
const endLoading = () => {
  let dom = bar.value as HTMLElement
  setTimeout(() => {
    window.requestAnimationFrame(() => {
      speed.value = 100
      dom.style.width = speed.value + '%'
    })
  }, 2000)
}
defineExpose({
  startLoading,
  endLoading
})
</script>

<template>
  <div class="wraps">
    <div ref="bar" class="bar"></div>
  </div>
</template>

<style scoped lang="less">
.wraps {
  position: fixed;
  top: 0;
  width: 100%;
  height: 3px;
  .bar {
    height: inherit;
    width: 0;
    background: deepskyblue;
  }
}
</style>