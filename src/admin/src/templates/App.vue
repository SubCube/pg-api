<template>
	<q-layout class="bg-grey-3">
		<q-header elevated class="bg-black">
			<q-toolbar>
				<q-toolbar-title>Header</q-toolbar-title>
				<q-space />
				<q-separator dark vertical />
				<q-btn stretch flat label="Main" :to="{ name: 'main' }" />
				<q-separator dark vertical />
				<q-btn stretch flat label="About" :to="{ name: 'about' }" />
			</q-toolbar>
		</q-header>

		<q-page-container>
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
