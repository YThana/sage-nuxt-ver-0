<script setup lang="ts">
const value = defineModel<string>();
</script>

<template>
	<UInput v-model="value" size="lg" color="primary" placeholder="Enter your prompt here...">
		<template #trailing>
			<UButton variant="ghost" color="ghost" size="md" class="rounded-xl" :square="true">
				<UIcon
					name="i-heroicons-microphone"
					class="h-[24px] w-[24px] text-primaryColor-500" />
			</UButton>
		</template>
	</UInput>
</template>
