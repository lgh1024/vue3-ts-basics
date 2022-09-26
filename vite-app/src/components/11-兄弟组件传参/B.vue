<script setup lang="ts">
import Bus from './Bus'
import {ref} from "vue";
/*type Props = {
  flag: boolean
}
defineProps<Props>()*/

let Flag = ref<boolean>(false)
Bus.on('on-click', (flag: boolean) => {
  Flag.value = flag
})
</script>

<template>
  <div class="B">
    <div>B组件</div>
<!--    {{ flag }}-->
    {{ Flag }}
  </div>
</template>

<style scoped lang="less">
.B {
  width: 200px;
  height: 200px;
  color: #fff;
  background-color: red;
}
</style>