import type {App, VNode} from "vue";
import Loading from './Loading.vue'
import {createVNode, render} from "vue";

export default {
  install(app: App) {
    const Vnode: VNode = createVNode(Loading)
    render(Vnode, document.body)
    app.config.globalProperties.$loading = {
      show: Vnode.component?.exposed?.show,
      hide: Vnode.component?.exposed?.hide
    }
  }
}