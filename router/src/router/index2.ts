import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import component from "*.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/index',
    component: () => import('@/views/Index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router