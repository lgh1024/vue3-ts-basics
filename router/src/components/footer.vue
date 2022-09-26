<script setup lang="ts">

</script>

<template>
  <div>
    <router-view></router-view>
    <hr>
    <h1>我是父路由</h1>
    <div>
      <router-link to="/user/">Login</router-link>
      <router-link to="/user/reg" style="margin-left: 10px">Reg</router-link>
    </div>
  </div>
</template>

<style scoped lang="less">

</style>