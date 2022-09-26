<script setup lang="ts">
  import {reactive, readonly} from "vue";
  // reactive 引用类型 Array、Object、Map、Set，reactive不需要加.value
  // readonly 是只读的
  let form = reactive({
    name: '张三',
    age: 18
  })

  const submit = () => {
    console.log(form)
  }

  const obj = reactive({name: '小小'})
  const read = readonly(obj)

</script>

<template>
  <div>
    <input type="text" v-model="form.name"><br>
    <input type="text" v-model="form.age"><br>
    <button @click="submit">提交</button>
  </div>
</template>

<style scoped>
  
</style>