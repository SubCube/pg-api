<template>
	<component :is="$route.meta.template" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import AppTemplate from '@/templates/App.vue'
import PlainTemplate from '@/templates/Plain.vue'

export default defineComponent({
	name: 'App',
	components: { AppTemplate, PlainTemplate },
})
</script>
