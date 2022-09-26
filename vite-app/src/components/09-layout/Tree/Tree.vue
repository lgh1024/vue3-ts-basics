<script setup lang="ts">
import TreeItem from './Tree.vue'

type TreeList = {
  name: string,
  icon?: string,
  children?: TreeList[] | []
}
type Props = {
  data?: TreeList[]
}
defineProps<Props>()

const emit = defineEmits(['on-click'])
const clickItem = (item: TreeList) => {
  emit('on-click', item)
}
</script>

<template>
  <div style="margin-left: 10px">
    <div :key="index" v-for="(item, index) in data" @click.stop="clickItem">
      {{ item.name }}
      <TreeItem @on-click="clickItem" v-if="item?.children?.length" :data="item.children"></TreeItem>
    </div>
  </div>
</template>

<style scoped lang="less">

</style>