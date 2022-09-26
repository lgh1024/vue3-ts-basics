<script lang="ts" setup>
/*import A from './动态组件/A.vue'
import B from './动态组件/B.vue'
import C from './动态组件/C.vue'*/
import Dialog from './插槽/Dialog.vue'
import {markRaw, reactive, ref} from "vue";

/*type Tabs = {
  name: string
  comName: any
}
type Com = Pick<Tabs, 'comName'>

const data = reactive<Tabs[]>([
  {
    name: '我是A组件',
    comName: markRaw(A)
  },
  {
    name: '我是B组件',
    comName: markRaw(B)
  },
  {
    name: '我是C组件',
    comName: markRaw(C)
  },
])

let current = reactive<Com>({
  comName: data[0].comName
})

const switchCom = (item: Tabs) => {
  current.comName = item.comName
}*/

// let name = ref('header')
// let name = ref('default')
let name = ref('footer')
</script>

<template>
  <div class="content">
    <!--    <div class="content-item" :key="item" v-for="item in 100">
          <Card :content="`我是第${item}个`"></Card>
        </div>-->

    <!--    <div class="tab">
          <div class="tab-item" v-for="item in data" @click="switchCom(item)">{{ item.name }}</div>
        </div>
    &lt;!&ndash;    动态组件&ndash;&gt;
        <component :is="current.comName"></component>-->

    <Dialog>
<!--      v-slot: 可以简写为 #-->
      <template #header>
        <div>
          我是具名插槽
        </div>
      </template>
<!--      v-slot 可以简写为 #default-->
<!--      <template v-slot="{data, index}">-->
      <template #default="{data, index}">
        <div>
          <div>{{ data.name }} --- {{ data.age }} --- {{ index }}</div>
        </div>
      </template>
      <template v-slot:footer>
        <div>
          我是具名插槽
        </div>
      </template>
      <template #[name]>
        <div>我是动态插槽</div>
      </template>
    </Dialog>
  </div>
</template>

<style scoped lang="less">
.content {
  flex: 1;
  margin: 20px;
  border: 1px solid #ccc;
  overflow: auto;

  &-item {
    padding: 20px;
    border: 1px #ccc solid;
  }
}

.tab {
  display: flex;

  &-item {
    margin: 10px;
    border: 1px solid #ccc;
  }
}
</style>