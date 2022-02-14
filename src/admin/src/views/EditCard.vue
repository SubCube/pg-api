<template>
	<div>
		<q-btn @click="$router.go(-1)" color="black" label="Back" class="q-mb-lx" />
		<q-form>
			{{ $route.params.id }}
			<q-input label="22" v-model="name"></q-input>
		</q-form>
	</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
	name: 'EditCard',
	setup() {
		const name = ref('')
		return {
			name,
		}
	},
})
</script>
<!-- <style lang="scss" scoped></style> -->
