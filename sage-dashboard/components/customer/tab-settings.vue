<script setup lang="ts">
const items = [
	{
		label: 'Associated Users',
	},
	{
		label: 'Email List',
	},
];

const ui = {
	list: {
		height: 'h-16',
		rounded: 'rounded-t-3xl rounded-b-0',
		background: 'bg-primaryColor-50',
		padding: 'pt-4 pb-0 px-6',
		tab: {
			size: 'text-base',
			font: 'font-medium',
			height: 'h-12',
			rounded: 'rounded-t-2xl rounded-b-0',
			active: 'text-primaryColor-50 bg-primaryColor-500',
			inactive: 'bg-primaryColor-50 text-black',
		},
	},
};
</script>

<template>
	<UTabs :ui :items="items">
		<template #item="{ item }">
			<div class="p-6">
				<AssociatedUsers v-if="item.label === 'Associated Users'" />
				<EmailList v-else />
			</div>
		</template>
	</UTabs>
</template>
