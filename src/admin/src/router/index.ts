import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'main',
		component: () => import(/* webpackChunkName: "main" */ '../views/Main.vue'),
		meta: { template: 'AppTemplate', isAuthRequired: false },
	},
	{
		path: '/edit/:id',
		name: 'edit',
		component: () => import(/* webpackChunkName: "main" */ '../views/EditCArd.vue'),
		meta: { template: 'AppTemplate', isAuthRequired: false },
	},

	{
		path: '/about',
		name: 'about',
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
		meta: { template: 'AppTemplate', isAuthRequired: true, title: 'Мессенджер' },
	},
]

const router = createRouter({
	// Provide the history implementation to use. We are using the hash history for simplicity here.
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
	scrollBehavior(_to, _from, savedPosition) {
		return savedPosition || { left: 0, top: 0 }
	},
})

export default router

declare module 'vue-router' {
	interface RouteMeta {
		title?: string
		template: 'AppTemplate' | 'PlainTemplate' | 'LoginTemplate'
	}
}
