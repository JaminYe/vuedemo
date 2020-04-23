import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home.vue'
import List from '@/components/list.vue'


Vue.use(Router);
export default new Router({
	routes: [{
			path: "/",
			name: '',
			component: Home,
			hidden: true
		},
		{
			path: "/",
			name: '用户管理',
			component: Home,
			hidden: true,
			children: [{
				path: 'list',
				name: '列表',
				compent:List,
				meta: {
					keepAlive: false
				}
			}]
		}
	]



})
