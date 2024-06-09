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
	name: 'name',
	required: false,
	size: 'default',
});

const id: string = useId();
const value = defineModel<any>();
</script>

<template>
	<UFormGroup :name :label :required :id>
		<UInput type="text" :size v-model="value" color="primary" variant="outline" :placeholder />
	</UFormGroup>
</template>
