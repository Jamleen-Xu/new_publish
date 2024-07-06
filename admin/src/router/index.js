import { createRouter, createWebHistory, useRoute } from 'vue-router'
import routes from './config'
import { userGetterRouter } from '@/stores/getterRouter'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/mainbox',
      name: 'mainbox',
      component: () => import('@/views/MainBox.vue')
    }
  ]
})

// 每次路由转跳之前
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    // 如果不是去login页面的，进行两个判断
    // 如果已经登录过了， next
    // 如果未登录，跳转到login
    if (!localStorage.getItem('token')) {
      next('/login')
    } else {
      // 登陆过了，判断是否有权限
      if (!userGetterRouter().isGetterRouter) {
        configRouter()
        next({ path: to.fullPath })
      } else {
        next();
      }
    }
  }
})

const configRouter = () => {
  routes.forEach(item => {
    // 给mainbox添加router
    router.addRoute('mainbox', { ...item })
  })

  // 改变 isGetterRouter
  userGetterRouter().changeGetterRouter(true)
}
export default router
