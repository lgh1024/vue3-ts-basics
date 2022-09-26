<script setup lang="ts">
import A from './17-css完整新特性/A.vue'
import {ref} from "vue";
// const style = ref<string>('')
type S = {
  color: string
}
const style = ref<S>({
  color: 'red'
})
setTimeout(() => {
  style.value.color = 'skyblue'
}, 3000)

</script>

<template>
  <div>
    <A>
      <div class="a">私人定制DIV</div>
    </A>
    <hr>
    <div class="div">
      动态CSS
    </div>
  </div>
</template>

<!--<style scoped lang="less">
.div {
  //color: v-bind(style);
  color: v-bind('style.color');
}
</style>-->
<style scoped lang="less">
.div {
  //color: v-bind(style);
  color: v-bind('style.color');
}
</style>