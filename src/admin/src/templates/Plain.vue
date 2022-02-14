<template>
	<q-layout class="bg-grey-5">
		<q-page-container class="full-height">
			<h1>Plain Template</h1>
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'AppTemplate',
})
</script>
