<script setup lang="ts">
import {ref} from "vue";

let count = ref<number>(0)
const add = () => {
  count.value++
}

/*import {$ref} from "vue/macros";
// $ref 不用加 .value (慎用)
let count = $ref<number>(0)
const add = () => {
  count++
}*/
</script>

<template>
  <div>
    <button @click="add">自增</button>
  </div>
  <div>
    {{ count }}
  </div>
</template>

<style scoped lang="less">

</style>