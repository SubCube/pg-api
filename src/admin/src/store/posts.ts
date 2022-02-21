import { defineStore } from 'pinia'
import { PostsService } from '@/api'
import { Post } from '@/@types/posts'

export const usePostsStore = defineStore('posts', {
	state: () => ({
		list: [] as Array<Post>,
	}),
	getters: {},
	actions: {
		async getList() {
			this.list = await PostsService.get()
		},
		async getPost(id: number) {
			return (await PostsService.get1(id)) as Post
		},

		async createPost(item: Post) {
			return await PostsService.post(item)
		},

		async deletePost(id: number) {
			return await PostsService.delete(id)
		},

		async editPost(post: Post) {
			await PostsService.put(post)
			await this.getList()
		},
	},
})
