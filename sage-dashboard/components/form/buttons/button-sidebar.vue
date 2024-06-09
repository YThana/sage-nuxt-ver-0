<script setup lang="ts">
interface Props {
	size?: 'default' | 'sm';
	icon?: string;
	label?: string;
	to?: string;
	active?: boolean;
	target?: string;
	trailing?: boolean;
}

withDefaults(defineProps<Props>(), {
	active: false,
	size: 'default',
	target: '_self',
	trailing: false,
});

const uiButton = {
	color: {
		primary: {
			solid: 'shadow-none bg-primaryColor-50 text-black hover:bg-primaryColor-500 hover:text-primaryColor-50',
		},
	},
};
</script>

<template>
	<UButton
		:ui="uiButton"
		:to
		:icon
		:size
		:label
		:class="[active && 'bg-primaryColor-500 text-primaryColor-50']"
		color="primary"
		:target
		:trailing
		truncate>
		<template #leading>
			<slot name="leading" />
		</template>

		<template #trailing>
			<slot name="trailing" />
		</template>
	</UButton>
</template>
