<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import Card from '../components/Card.vue'
import { useCounterStore } from '../stores/counter'
const router = useRouter()

const store = useCounterStore()
const { counter, list } = storeToRefs(store)
const { increment } = store

const edit = (id: number) => router.push({ name: 'edit', params: { id } })
const deleteItem = (id: number) => console.log(`deleted ${id}`)
</script>

<template>
	<q-page>
		<q-card bordered primary>
			<q-card-section>
				{{ counter }}
			</q-card-section>
			<q-card-section>
				<q-btn color="primary" @click="increment">Increment</q-btn>
			</q-card-section>
		</q-card>
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
