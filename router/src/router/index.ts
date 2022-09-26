import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import component from "*.vue";

const routes: Array<RouteRecordRaw> = [
/*  {
    path: '/',
    name: 'Login',
    component: () => import('../components/login.vue')
  },
  {
    // :id 为动态路由参数
    path: '/reg/:id',
    name: 'Reg',
    component: () => import('../components/reg.vue')
  },*/
  /*{
    path: '/user',
    component: () => import('../components/footer.vue'),
    children: [
      {
        path: '', // 默认展示此页面
        name: 'Login',
        component: () => import('../components/login.vue')
      },
      {
        // :id 为动态路由参数
        path: 'reg',
        name: 'Reg',
        component: () => import('../components/reg.vue')
      },
    ]
  }*/

  // 命名视图
  {
    path: '/',
    component: () => import('../components/root.vue'),
    // alias 别名：多个路径访问同一个路由
    alias: ['/root', '/root1', '/root2'],
    // 路由重定向
    // redirect: '/user1', // 第一种写法
    /*redirect: { // 第二种写法
      path: '/user1'
    },*/
    redirect: to => { // 第三种写法
      console.log('@@@@@@@@@',to)
      // return '/user1'
      return {
        path: '/user1',
        // query 参数
        // query: to.query
        query: {
          name: '张三'
        }
      }
    },
    children: [
      {
        path: '/user1',
        components: {
          // default 为默认视图
          default: () => import('../components/components/A.vue')
        }
      },
      {
        path: '/user2',
        components: {
          bbb: () => import('../components/components/B.vue'),
          ccc: () => import('../components/components/C.vue')
        }
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router