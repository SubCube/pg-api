<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import Card from '../components/Card.vue'
import CreateCard from '../components/CreateCard.vue'

import { usePostsStore } from '../store/posts'

const router = useRouter()

const store = usePostsStore()
const { list } = storeToRefs(store)
const { getList, deletePost } = store

getList()

const edit = (id: number) => router.push({ name: 'edit', params: { id } })
const deleteItem = async (id: number) => {
	await deletePost(id)
	await getList()
}
</script>

<template>
	<q-page>
		<CreateCard />
		<q-list style="display: flex; flex-wrap: wrap">
			<Card
				v-for="item in list"
				:key="item.id"
				:title="item.title"
				:image="item.image"
				:description="item.description"
				@edit="edit(item.id)"
				@delete="deleteItem(item.id)"
			/>
		</q-list>
	</q-page>
</template>
