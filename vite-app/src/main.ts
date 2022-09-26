import {createApp} from 'vue'
// import './style.css'
import App from './App.vue'
// 全局组件导入
import Card from './components/09-layout/Card/Card.vue'
import mitt from "mitt";

import Loading from "./components/15-自定义vue插件/loading";

// 引入 ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入pinia
import { createPinia } from "pinia";
// 调用
const store = createPinia()

const Mit = mitt()
// .component('Card', Card) --- 全局组件注册，必须写在 .mount('#app') 之前
const app = createApp(App)
app.component('Card', Card)

// 定义 Mitt
declare module 'vue' {
  export interface ComponentCustomProperties {
    $Bus: typeof Mit
  }
}
app.config.globalProperties.$Bus = Mit

// 定义全局函数
type Filter = {
  format: <T>(str: T) => string
}
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $filters: Filter,
    $env: string
  }
}
app.config.globalProperties.$filters = {
  format <T>(str: T): string {
    return `真·${str}`
  }
}
app.config.globalProperties.$env = 'dev'

// 定义Vue插件
app.use(Loading)
type Lod = {
  show: () => void,
  hide: () => void
}
// 编写ts loading 声明文件放置报错和智能提示
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $loading: Lod
  }
}

// 注册 ElementPlus
app.use(ElementPlus)

// 使用pinia
app.use(store)

app.mount('#app')
