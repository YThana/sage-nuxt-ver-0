<script setup lang="ts">
interface Props {
	variant?: 'primary' | 'secondary' | 'dark' | 'ghost' | 'primary-light';
	icon?: string;
	label?: string;
	to?: string;
	size?: 'default' | 'sm' | 'xs';
	target?: string;
	block?: boolean;
	trailing?: boolean;
}

withDefaults(defineProps<Props>(), {
	variant: 'primary',
	size: 'default',
	target: '_self',
	block: false,
	trailing: false,
});

// const uiButton = computed(() => {
// 	switch (props.size) {
// 		case 'default':
// 			return { base: 'justify-center', font: 'font-normal' };
// 		case 'sm':
// 			return { base: 'justify-center', font: 'font-normal' };
// 		default:
// 			return { base: 'justify-center' };
// 	}
// });
</script>

<template>
	<UButton :to :icon :size :label :color="variant" :target :block :trailing>
		<template #leading>
			<slot name="leading" />
		</template>
		<template #trailing>
			<slot name="trailing" />
		</template>
	</UButton>
</template>
