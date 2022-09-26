<script setup lang="ts">

</script>

<template>
  <div>
    <router-link to="/user1">user1</router-link>
    <router-link to="/user2" style="margin-left: 30px">user2</router-link>
    <hr>
    <router-view></router-view>
    <router-view name="bbb"></router-view>
    <router-view name="ccc"></router-view>
  </div>
</template>

<style scoped lang="less">

</style>