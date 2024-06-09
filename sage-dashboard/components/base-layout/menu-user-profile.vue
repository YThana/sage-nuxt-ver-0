<script setup lang="ts">
interface Props {
	displayName: string;
	email: string;
	notification: number;
	bgColor?: boolean;
	sm?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	bgColor: true,
	sm: false,
});

const displayNameFirstLetter = computed(() => {
	return props.displayName?.charAt(0);
});

const items = [
	[
		{
			label: 'User menu',
			icon: 'i-heroicons-user-circle',
			to: '/user-profile',
		},
		{
			label: 'Sign out',
			icon: 'i-heroicons-arrow-left-on-rectangle',
		},
	],
	[
		{
			label: 'Mange Admin',
			icon: 'i-heroicons-cog-8-tooth',
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
	<div :class="['flex items-center gap-2 rounded-2xl p-2', bgColor ? 'bg-primaryColor-200' : '']">
		<div
			class="relative flex h-10 w-10 items-center justify-center rounded-lg bg-primaryColor-500 text-2xl font-bold text-primaryColor-50">
			{{ displayNameFirstLetter }}
			<div
				class="absolute -bottom-1 -right-1 flex items-center justify-center rounded-[3px] bg-green-500 px-[4px] text-xs font-bold leading-4 text-white">
				{{ notification }}
			</div>
		</div>
		<div class="flex-1 truncate" v-if="!sm">
			<p class="truncate text-base font-medium text-primaryColor-600">
				{{ displayName }}
			</p>
			<p class="truncate text-xs text-primaryColor-500">{{ email }}</p>
		</div>
		<UDropdown :items="items" :ui="uiDropdown">
			<UIcon
				name="i-heroicons-chevron-up-down"
				class="h-[24px] w-[24px] text-primaryColor-500 hover:text-primaryColor-600" />
		</UDropdown>
	</div>
</template>
