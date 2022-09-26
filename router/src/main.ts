import {createApp, createVNode, render} from 'vue'
// import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

import router from './router/index2'
import loadingBar from '@/views/loadingBar.vue'
const Vnode = createVNode(loadingBar)
render(Vnode, document.body)

const app = createApp(App)
app.use(router)
app.use(ElementPlus)

// 路由导航守卫
// (前置守卫)
const whileList = ['/']
router.beforeEach((to, from, next) => {
  Vnode.component?.exposed?.startLoading()
  if (whileList.includes(to.path) || localStorage.getItem('token')) {
    next()
  } else {
    next('/')
  }
})
// (后置守卫)
router.afterEach((to, from) => {
  Vnode.component?.exposed?.endLoading()
})

app.mount('#app')
