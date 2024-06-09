<script setup lang="ts">
import 'v-calendar/dist/style.css';
import { DatePicker as vDatePicker } from 'v-calendar';

/*------------------------------------------------------------------------------------------------*/

const emit = defineEmits(['close']);

const model = defineModel<Date>({ required: true });

/*------------------------------------------------------------------------------------------------*/

watch(model, (modelValue) => {
	emit('close');
});

const attrs = {
	borderless: true,
	transparent: false,
};
</script>

<template>
	<vDatePicker v-model="model" mode="date" v-bind="{ ...attrs }" />
</template>

<style scoped></style>
