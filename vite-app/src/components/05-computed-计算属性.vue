<script setup lang="ts">
import {computed, ref} from "vue";

let firstName = ref('')
let lastName = ref('')
// 常用写法
/*const name = computed(() => {
  return firstName.value + '--' + lastName.value
})*/
// 第二种写法
const name = computed({
  get() {
    return firstName.value + lastName.value
  },
  set() {
    firstName.value + lastName.value
  }
})
</script>

<template>
  <div>
    <input type="text" v-model="firstName">
    <input type="text" v-model="lastName">
    <div>
      {{ name }}
    </div>
  </div>
</template>

<style scoped>

</style>