<script setup lang="ts">
const items = [
	[
		{
			label: 'Refresh',
			icon: 'i-heroicons-arrow-path',
		},
	],
];

const uiDropdown = /* ui */ {
	width: 'w-[175px]',
	ring: 'ring-1 ring-primaryColor-200',
	background: 'bg-primaryColor-100',
	item: {
		active: 'bg-primaryColor-200 text-black',
	},
	popper: {
		placement: 'bottom-start',
	},
	divide: 'divide-primaryColor-200',
	shadow: 'shadow',
};
</script>

<template>
	<UDropdown :items="items" :ui="uiDropdown">
		<UIcon
			name="i-heroicons-cog-8-tooth"
			class="h-[24px] w-[24px] text-primaryColor-500 hover:text-primaryColor-600" />
	</UDropdown>
</template>

<style scoped></style>
