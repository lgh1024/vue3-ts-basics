<script lang="ts" setup>
import {useRouter} from "vue-router";

const router = useRouter()
/*const toPage = (url: string) => {
 // 字符串方式
 // router.push(url)
 // 对象形式
 router.push({
   path: url
 })
  // 传入命名式
  // 不会留下历史记录
  /*router.replace({
    name: url
  })
 router.push({
    name: url
  })
}

const next = () => {
  router.go(1)
}
const prev = () => {
  // router.go(-1)
  router.back()
}*/
</script>

<template>
<div>
    <h1>哈哈哈</h1>
   <hr>
   <!--    &lt;!&ndash;    <router-link to="/">Login</router-link> &ndash;&gt;
    &lt;!&ndash;    <router-link style="margin-left: 10px" to="/reg">Reg</router-link> &ndash;&gt;
    &lt;!&ndash;    replace不会留下历史记录 &ndash;&gt;
    <router-link replace :to="{name: 'Login'}">Login</router-link>
    <router-link replace style="margin-left: 10px" :to="{name: 'Reg'}">Reg</router-link>
    <hr>
    &lt;!&ndash;    <button @click="toPage('/')">Login</button>
        <button @click="toPage('/reg')" style="margin-left: 10px">Reg</button>&ndash;&gt;
    <button @click="toPage('Login')">Login</button>
    <button @click="toPage('Reg')" style="margin-left: 10px">Reg</button>
    <hr>
    <button @click="next()">next</button>
    <button @click="prev()" style="margin-left: 10px">prev</button>
    <hr>-->
    <router-view></router-view>
  </div>
</template>

<style scoped lang="less">
* {
  padding: 0;
  margin: 0;
}
html,body,#app {
  height: 100%;
  overflow: hidden;
}
</style>