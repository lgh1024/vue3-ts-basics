<script setup lang="ts">
import {data} from './list.json'
import {useRouter} from "vue-router";

const router = useRouter()
type Item = {
  name: string
  price: number
  id: number
}
const toDetail = (item: Item) => {
  /*// query 传参方式
  router.push({
    path: '/reg',
    query: item
  })*/
  // params 传参方式
  router.push({
    name: 'Reg',
    // params: item
      params: {
        // 定义动态路由参数
        id: item.id
      }
  })
}
</script>

<template>
  <!--  <div>
      <div class="login">Login</div>
    </div>-->
  <div>嘿嘿嘿！我是列表页面</div>
  <table cellspacing="0" class="table">
    <thead>
    <tr>
      <th>品牌</th>
      <th>价格</th>
      <th>操作</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in data" :key="item.id">
      <th>{{ item.name }}</th>
      <th>{{ item.price }}</th>
      <th>
        <button @click="toDetail(item)">详情</button>
      </th>
    </tr>
    </tbody>
  </table>
</template>

<style scoped lang="less">
/*.login {
  background: green;
  height: 400px;
  width: 400px;
  font-size: 20px;
  color: white;
}*/

.table {
  width: 400px;
}
</style>