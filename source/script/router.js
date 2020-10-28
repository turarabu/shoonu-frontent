import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from ':src/view/Home.vue'

export default router()

function router () {
	Vue.use(VueRouter)

	return new VueRouter({
		base: '/',
		mode: 'history',
		routes: getRoutes()
	})
}

function getRoutes () {
	return [
		{
			path: '/',
			name: 'Home',
			component: Home
		}
	]
}