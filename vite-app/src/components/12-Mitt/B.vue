<script  lang="ts" setup="">
import { getCurrentInstance } from "vue";

const instance = getCurrentInstance()

const Bus = (str: any) => {
  console.log(str, '------------->B')
}

instance?.proxy?.$Bus.on('on-xiaoman', Bus)
instance?.proxy?.$Bus.off('on-xiaoman', Bus)
instance?.proxy?.$Bus.all.clear()
/*instance?.proxy?.$Bus.on('*', (type, str) => {
  console.log(type, str, '------------->B')
})*/
</script>

<template>
  <div>
    <h1>我是B</h1>
  </div>
</template>

<style scoped lang="less">

</style>