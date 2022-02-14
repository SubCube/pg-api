// Mocks all files ending in `.vue` showing them as plain Vue instances
/* eslint-disable */
declare module '*.vue' {
	import type { DefineComponent } from '@/vueue'
	const component: DefineComponent<{}, {}, any>
	export default component
}
