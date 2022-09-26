<script  lang="ts" setup>
import A from './11-兄弟组件传参/A.vue'
import B from './11-兄弟组件传参/B.vue'
import {ref} from "vue";
/*let Flag = ref<boolean>(false)
const getFlag = (params: boolean) => {
  Flag.value = params
}*/
</script>

<template>
  <div>
<!--    <A @on-click="getFlag"></A>
    <hr>
    <B :flag="Flag"></B>-->
    <A></A>
    <hr>
    <B></B>
  </div>
</template>

<style scoped lang="less">

</style>