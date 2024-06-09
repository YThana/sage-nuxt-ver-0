<script setup lang="ts">
/*--------------------------------------------------------------------------------------------------------------------*/

interface Props {
	customers?: string[];
}

defineProps<Props>();

const selected = defineModel<string>();

/*--------------------------------------------------------------------------------------------------------------------*/

const ui = {
	rounded: 'rounded-2xl',
	placeholder: 'text-black',
	size: {
		md: 'h-10 text-base',
	},
	padding: {
		md: 'px-4',
	},
	color: {
		primary: {
			outline: 'bg-primaryColor-50 text-black ring-1 ring-primaryColor-200',
		},
	},
	icon: {
		size: {
			md: 'h-[18px] w-[18px]',
		},
		trailing: {
			padding: {
				md: 'pe-4',
			},
		},
	},
};

const uiMenu = {
	shadow: 'shadow',
	rounded: 'rounded-lg',
	ring: 'ring-1 ring-primaryColor-200',
	background: 'bg-primaryColor-100',
	input: 'bg-primaryColor-100 text-base placeholder-secondaryColor-300',
	padding: 'p-2',
	option: {
		size: 'text-base',
		padding: 'px-2',
		color: 'text-black',
		active: 'bg-primaryColor-300',
	},
};

/*--------------------------------------------------------------------------------------------------------------------*/
</script>

<template>
	<USelectMenu
		trailingIcon="i-heroicons-chevron-down"
		color="primary"
		size="md"
		:ui
		:uiMenu
		v-model="selected"
		:options="customers"
		placeholder="Choose Customer"
		searchable
		searchable-placeholder="Search Customer" />
</template>

<style scoped></style>
