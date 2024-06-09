<script setup lang="ts">
defineProps<{
	text: string;
}>();

const ui = {
	wrapper: '',
	background: 'bg-primaryColor-50',
	text: 'text-black',
	ring: 'ring-1 ring-primaryColor-200',
	base: 'px-3 py-2 flex text-sm items-center',
	width: 'max-w-max',
};
</script>

<template>
	<UTooltip :ui :text>
		<slot />
	</UTooltip>
</template>

<style scoped></style>
