<template>
	<q-page>
		<q-btn @click="router.go(-1)" color="black" label="Back" class="q-mb-lx" />
		<q-form>
			{{ route.params.id }}
			<q-input label="title" v-model="name" />
			<q-input label="title" v-model="obj.title" />
			<q-input label="description" v-model="obj.description" />
			<q-input label="image" v-model="obj.image" />
			<img :src="obj.image" style="width: 300px; height: auto" />
			<q-btn @click="editPost(obj)">Edit</q-btn>
		</q-form>
	</q-page>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePostsStore } from '@/store/posts'
import { Post } from '@/@types/posts'

const name = ref('')
const route = useRoute()
const router = useRouter()
const store = usePostsStore()
const { getPost, editPost } = store

const obj = ref<Post>(new Post())
onMounted(async () => {
	obj.value = (await getPost(Number(route.params.id))) as Post
})
</script>
