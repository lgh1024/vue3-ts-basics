<script  lang="ts" setup>
import Tree from './Tree/Tree.vue'
import {reactive, ref} from "vue";

const list = reactive<number[]>([1, 2, 3])
const flag = ref<boolean>(false)
type Props = {
  title?: string,
  data?: number[]
}
// withDefaults --- 如果父组件没有传值就是显示默认值(ts才有)
withDefaults(defineProps<Props>(), {
  title: '我是默认值',
  data: () => [1, 2, 3, 4, 5, 6]
})

const emit = defineEmits(['on-click', 'on-click2'])
const clickTap = () => {
  emit('on-click', list, true)
}
const clickTap2 = () => {
  emit('on-click2', list, flag)
}
defineExpose({
  list,
  flag
})


type TreeList = {
  name: string
  icon?: string
  children?: TreeList[] | []
}
const data = reactive<TreeList[]>([
  {
    name: 'no.1',
    children: [
      {
        name: 'no.1-1',
        children: [
          {
            name: 'no.1-1-1'
          }
        ]
      },
      {
        name: 'no.2',
        children: [
          {
            name: 'no.2-1'
          }
        ]
      },
      {
        name: 'no.3'
      }
    ]
  },
])

const getItem = (item: TreeList) => {
  console.log(item, '父组件')
}
</script>

<template>
  <div class="menu">
    菜单区域
    <div>{{ title  }}</div>
    <div>{{ data }}</div>
    <div>
      <button @click="clickTap">派发</button>
      <br>
      <button @click="clickTap2">派发2</button>
    </div>
    <hr>
    <hr>
    <hr>
    <Tree :data="data" @on-click="getItem"></Tree>
  </div>
</template>

<style scoped lang="less">
.menu {
  width: 200px;
  height: 100%;
  border-right: 1px solid #ccc;
}
</style>