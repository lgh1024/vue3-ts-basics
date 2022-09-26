<script setup lang="ts">
  import {ref} from "vue";

  const msg: string = '我是XXX'
  const msg1: string = '<h3>啊哈哈哈</h3>'
  const flag: boolean = true
  const flag1: string = 'B'

  const parent = () => {
    console.log('我是父级')
  }
  const clickTap = () => {
    console.log('触发了点击事件，子级')
  }

  type Style = {
    color: string
    fontSize: string
  }
  const style: Style = {
    color: "blue",
    fontSize: '24px'
  }

  type Cl = {
    a: boolean
    b: boolean
  }
  const cls: Cl = {
    a: true,
    b: true
  }

  const Arr: Array<any> = [{name: '张三'}, {name: '李四'}, {name: '王五'}]

  const message = ref('test')
</script>

<template>
  <div @click="parent">
    {{ msg }}
    <div v-text="msg"></div>
    <div v-html="msg1" v-if="flag"></div>
<!--    <div v-html="msg1" v-show="flag"></div>-->
    <hr>
    <div v-if="flag1 == 'A'">A</div>
    <div v-else-if="flag1 == 'B'">B</div>
    <div v-else-if="flag1 == 'C'">C</div>
    <div v-else>D</div>
    <hr>
    <button v-on:click="clickTap">按钮</button>
    <button @click.stop="clickTap">按钮</button>
    <hr>
    <div v-bind:style="style">张三</div>
    <div :style="style">张三</div>
    <div :class="cls">大满</div>
    <hr>
    <div v-for="item in Arr">{{ item }}</div>
    <div v-for="item in Arr">{{ item.name }}</div>
    <hr>
    <input type="text" v-model="message">
    <div>{{ message }}</div>
  </div>
</template>

<style scoped>
.a {
  color: pink;
}
.b {
  font-size: 28px;
}
</style>