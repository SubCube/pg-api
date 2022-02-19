<template>
	<q-card flat style="margin: 0 auto; max-width: 600px" bordered>
		<q-form @submit.prevent="create(obj)">
			<q-card-section>
				<q-input outlined v-model="obj.title" label="title" class="q-mb-xl" />

				<q-input outlined v-model="obj.description" label="description" class="q-mb-xl" />

				<q-input outlined v-model="obj.image" label="image" class="q-mb-xl" />
			</q-card-section>
			<q-card-actions>
				<q-btn type="submit"> Create </q-btn>
			</q-card-actions>
		</q-form>
	</q-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

import { usePostsStore } from '@/store/posts'
import { Post } from '@/@types/posts'

const store = usePostsStore()
const { createPost, getList } = store

const create = async (obj: Post) => {
	await createPost(obj)
	obj = new Post()
	await getList()
}

const obj = ref<Post>(new Post())
</script>
