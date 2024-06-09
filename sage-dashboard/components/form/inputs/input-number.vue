<script setup lang="ts">
import type { InputSize } from '#ui/types';

interface Props {
	placeholder?: string;
	label?: string;
	name?: string;
	required?: boolean;
	size?: InputSize;
}

const props = withDefaults(defineProps<Props>(), {
	placeholder: 'Enter here...',
	label: 'label',
	name: 'label',
	required: false,
	size: 'default',
});

const id: string = useId();
const value = defineModel<any>();
const uiFormGroup = {
	label: {
		base: 'block font-bold text-sm uppercase text-black ml-6',
	},
	error: 'ml-6',
};
const uiInput = {
	padding: {
		default: 'px-4',
		sm: 'px-4',
	},
};
</script>

<template>
	<UFormGroup :name :label :ui="uiFormGroup" :required :id>
		<UInput
			:ui="uiInput"
			type="number"
			:size
			v-model="value"
			color="primary"
			variant="outline"
			:placeholder />
	</UFormGroup>
</template>
