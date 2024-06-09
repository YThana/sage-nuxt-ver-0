<script setup lang="ts">
// -------------------------------------------------------------------------------------------------

interface Props {
	notification: string;
	timeStamp: string;
}

// -------------------------------------------------------------------------------------------------

const props = defineProps<Props>();

// -------------------------------------------------------------------------------------------------
</script>

<template>
	<div class="flex w-full items-center justify-between gap-4">
		<div class="flex flex-1 flex-col text-black">
			<p>{{ props.notification }}</p>
			<p class="text-xs font-medium text-secondaryColor-500">{{ props.timeStamp }}</p>
		</div>
		<UButton variant="ghost" color="ghost" square icon="i-heroicons-ellipsis-vertical" />
	</div>
</template>

<style scoped></style>
