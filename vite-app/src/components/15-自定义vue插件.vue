<script setup lang="ts">
import {getCurrentInstance} from "vue";

const instance = getCurrentInstance()
instance?.proxy?.$loading.show()
</script>

<template>
  <div>

  </div>
</template>

<style scoped lang="less">

</style>