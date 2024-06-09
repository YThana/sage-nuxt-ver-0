<script setup lang="ts">
export interface RadioGroupOption {
	label: string;
	value: any;
}

interface Props {
	disabled?: boolean;
	options?: RadioGroupOption[];
	required?: boolean;
	row?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	disabled: false,
	required: false,
	row: false,
});

const value = defineModel<string>();
</script>

<template>
	<div :class="[row ? 'gap-8' : 'flex-col gap-4', 'flex']">
		<URadio
			v-for="option of options"
			:key="option.value"
			v-model="value"
			v-bind="option"
			:required />
	</div>
</template>
