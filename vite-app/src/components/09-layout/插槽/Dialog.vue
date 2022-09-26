<script setup lang="ts">
import {reactive, ref} from "vue";

  type names = {
    name: string
    age: number
  }
  const data = reactive<names[]>([
    {
      name: '作用域插槽1',
      age: 201
    },
    {
      name: '作用域插槽2',
      age: 202
    },
    {
      name: '作用域插槽3',
      age: 203
    },
    {
      name: '作用域插槽4',
      age: 204
    },
  ])

</script>

<template>
  <div>
    <div class="header">
<!--      具名插槽-->
      <slot name="header"></slot>
    </div>
    <div class="main">
<!--      匿名插槽
      <slot></slot>-->

      <div v-for="(item, index) in data">
        <slot :data="item" :index="index"></slot>
      </div>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped lang="less">
  .header {
    height: 200px;
    background-color: red;
    color: #fff;
  }
  .main {
    height: 200px;
    background-color: green;
    color: #fff;
  }
  .footer {
    height: 200px;
    background-color: blue;
    color: #fff;
  }
</style>