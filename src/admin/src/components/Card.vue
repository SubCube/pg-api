<template>
	<q-card class="card shadow-8">
		<div>
			<q-img :src="image" style="width: 100%; height: 150px" fit="cover" />
			<q-card-section class="text-h4">{{ title }}</q-card-section>
			<q-card-section class="text-subtitle1">{{ description }}</q-card-section>
		</div>
		<div class="controls">
			<q-btn color="secondary" @click="$emit('edit')">Edit</q-btn>
			<q-btn color="red" @click="$emit('delete')">Delete</q-btn>
		</div>
	</q-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
	},
	emits: ['edit', 'delete'],
})
</script>

<style scoped lang="scss">
.card {
	width: calc(25% - 20px);
	margin: 10px;
	height: 100%;
	padding: 20px;
}
.controls {
	display: flex;
	justify-content: space-between;
}
</style>
