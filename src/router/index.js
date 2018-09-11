import Vue from 'vue'
import Router from 'vue-router'

// 动态按需加载组件
const Index = resolve => require(['views/index'], resolve)
const Login = resolve => require(['views/login/index'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
