<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from './stores/counter'
const store = useCounterStore()
const { counter } = storeToRefs(store)
const { increment } = store
</script>

<template>
	<header>header</header>

	<main>
		<div>{{ counter }}</div>
		<div>
			<button @click="increment">Increment</button>
		</div>
	</main>
</template>
