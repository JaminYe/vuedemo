import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login.vue'
import Main from '@/views/Main.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
