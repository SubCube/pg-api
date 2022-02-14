import { defineStore } from 'pinia'
import { PostsService } from '@/api'

export const useCounterStore = defineStore('counter', {
	state: () => ({
		counter: 0,
		list: [] as Array<unknown>,
	}),
	getters: {
		doubleCount: state => state.counter * 2,
	},
	actions: {
		async increment() {
			this.counter++
			this.list = await PostsService.get()
		},
	},
})
