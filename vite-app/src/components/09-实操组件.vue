<script setup lang="ts">
// 引入局部组件
import Menu from './09-layout/Menu.vue'
import Header from './09-layout/Header.vue'
import Content from './09-layout/Content.vue'
import {reactive, ref} from "vue";

const list = reactive<number[]>([1, 2, 3])
const menus = ref(null)
const getList = (list: number[], flag: boolean) => {
  console.log(list, '我是子组件过来的数组', flag)
  console.log(menus.value)
}
</script>

<template>
  <div class="layout">
<!--    <Menu
        ref="menus"
        @on-click="getList"
        @on-click2="getList"
        :data="list"
        title="我想传一条裤子"
    >--><Menu
        ref="menus"
        @on-click="getList"
        @on-click2="getList"
    >

    </Menu>
    <div class="layout-right">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
</template>

<style scoped lang="less">
.layout {
  height: 1000px;
  display: flex;
  overflow: hidden;

  &-right {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>