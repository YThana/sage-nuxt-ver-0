<script setup lang="ts">
interface Props {
	label?: string;
	required?: boolean;
	disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	required: false,
	disabled: false,
});

const id = useId();
const selected = defineModel<any>();
</script>

<template>
	<UCheckbox v-model="selected" :name="label" :label :required :disabled :id />
</template>
