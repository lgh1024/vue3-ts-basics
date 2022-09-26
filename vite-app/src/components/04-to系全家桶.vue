<script setup lang="ts">
import {reactive, toRaw, toRef, toRefs} from "vue";

const man = reactive({name: '小满', age: 23, like: 'JK'})

/*const like = toRef(man, 'like')
const change = () => {
  // man.like = '萝莉'
  like.value = '萝莉'
  console.log(like)
}*/

/*let {name, age, like} = toRefs(man)
const change = () => {
  name.value = '大满'
  console.log(name, age, like)
}*/

const change = () => {
  console.log(man, toRaw(man))
}
</script>

<template>
  <div>
    <div>{{ man }}</div>
    <hr>
<!--    <div>{{ name }}&#45;&#45;{{ age }}&#45;&#45;{{ like }}</div>-->
    <hr>
    <button @click="change">修改</button>
  </div>
</template>

<style scoped>

</style>