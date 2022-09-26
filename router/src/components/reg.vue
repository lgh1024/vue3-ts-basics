<script setup lang="ts">
import {data} from './list.json'
import {useRoute, useRouter} from "vue-router";

const route = useRoute()
const router = useRouter()

const item = data.find(v => v.id === Number(route.params.id))
</script>

<template>
  <!--  <div>
      <div class="reg">Reg</div>
    </div>-->

  <div>
    <button @click="router.back()">返回</button>
    <h3>嘿嘿嘿！我是详情页面</h3></div>
  <!-- query传参用query接收，params传参用params接收 -->
  <!--  <div>品牌：{{ route.query.name }}</div>
    <div>价格：{{ route.query.price }}</div>
    <div>ID：{{ route.query.id }}</div>-->
  <div>品牌：{{ item?.name }}</div>
  <div>价格：{{ item?.price }}</div>
  <div>ID：{{ item?.id }}</div>
</template>

<style scoped lang="less">
/*.reg {
  background: red;
  height: 400px;
  width: 400px;
  font-size: 20px;
  color: white;
}*/


</style>