<script setup lang="ts">
// -------------------------------------------------------------------------------------------------
export interface CheckboxGroupOptions {
	label: string;
	required?: boolean;
	disabled?: boolean;
}
interface Props {
	options: CheckboxGroupOptions[];
	row?: boolean;
}
// -------------------------------------------------------------------------------------------------
const props = withDefaults(defineProps<Props>(), {
	row: false,
});
const selected = defineModel<string[]>();
// -------------------------------------------------------------------------------------------------
</script>

<template>
	<div class="flex" :class="row ? 'flex-row gap-8' : 'flex-col gap-4'">
		<UCheckbox
			v-for="option of props.options"
			v-model="selected"
			:value="option.label"
			:label="option.label"
			:required="option.required"
			:disabled="option.disabled" />
	</div>
</template>

<style scoped></style>
