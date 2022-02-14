<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '../stores/counter'

const store = useCounterStore()
const { counter } = storeToRefs(store)
const { increment } = store
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
	</q-page>
</template>
