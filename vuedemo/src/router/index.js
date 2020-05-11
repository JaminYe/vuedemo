import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import Main from '@/components/Main.vue'
import Test1 from '@/components/Test1.vue'
import Test2 from '@/components/Test2.vue'
import Test3 from '@/components/Test3.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Login',
      component: Login,
      hidden: true
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      hidden: true
    },
    {
      path: '/main',
      name: 'ceshi1',
       component: Main,
      children: [{
          path: '/test1',
          name: 'test1',
          component: Test1
        }, {
          path: '/test2',
          name: 'test2',
          component: Test2
        },

      ]
    },
    {
      path: '/main',
      component: Main,
      name: 'ceshi2',
      children: [{
          path: '/test3',
          name: 'test3',
          component: Test3
        },
        {
          path: '/test2',
          name: 'test2',
          component: Test2
        }
      ]
    },
    {
      path: '/main',
      component: Main,
      name: 'test3',
      children: [{
          path: '/test2',
          name: 'test2',
          component: Test2
        },
        {
          path: '/test3',
          name: 'test3',
          component: Test3
        }


      ]
    }

  ]
})
