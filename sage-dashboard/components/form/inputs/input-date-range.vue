<script setup lang="ts">
import { sub, format, isSameDay, type Duration } from 'date-fns';
import 'v-calendar/dist/style.css';
import { DatePicker as VCalendarDatePicker } from 'v-calendar';
import { _full } from '#tailwind-config/theme/borderRadius';

const emit = defineEmits(['close']);

const attrs = {
	borderless: true,
	transparent: false,
};
const ranges = [
	{ label: 'Last 7 days', duration: { days: 7 } },
	{ label: 'Last 14 days', duration: { days: 14 } },
	{ label: 'Last 30 days', duration: { days: 30 } },
	{ label: 'Last 3 months', duration: { months: 3 } },
	{ label: 'Last 6 months', duration: { months: 6 } },
	{ label: 'Last year', duration: { years: 1 } },
];

const selected = ref({ start: sub(new Date(), { days: 14 }), end: new Date() });

function isRangeSelected(duration: Duration) {
	return (
		isSameDay(selected.value.start, sub(new Date(), duration)) &&
		isSameDay(selected.value.end, new Date())
	);
}

function selectRange(duration: Duration) {
	selected.value = { start: sub(new Date(), duration), end: new Date() };
}

const formattedDate = computed(
	() =>
		`${format(selected.value.start, 'd MMM, yyy')} - ${format(selected.value.end, 'd MMM, yyy')}`,
);
</script>

<template>
	<UPopover :popper="{ placement: 'bottom-start' }">
		<!-- <UButton icon="i-heroicons-calendar-days-20-solid">
			{{ format(selected.start, 'd MMM, yyy') }} - {{ format(selected.end, 'd MMM, yyy') }}
		</UButton> -->
		<!-- <UButton
			color="primaryGray"
			variant="solid"
			size="lg"
			class="flex rounded-2xl px-8 text-black">
			<IconCalendar class="mr-2" />
			{{ format(selected.start, 'd MMM, yyy') }} -
			{{ format(selected.end, 'd MMM, yyy') }}
		</UButton> -->
		<TheButton
			type="secondary"
			:label="formattedDate"
			class="ring-inputBorder px-6 font-medium ring-1">
			<template #leading>
				<UIcon name="i-heroicons-calendar" class="text-icon mr-2 h-[20px] w-[20px]" />
			</template>
		</TheButton>
		<template #panel="{ close }">
			<div
				class="divide-grayy dark:divide-grayy flex flex-row items-center divide-x bg-white p-1">
				<div class="flex flex-col py-4">
					<UButton
						color="white"
						v-for="(range, index) in ranges"
						:key="index"
						:label="range.label"
						class="mx-2 my-1 h-9 rounded-2xl bg-blue-400 px-6 text-white"
						:class="[
							isRangeSelected(range.duration)
								? 'bg-blue-700 hover:bg-blue-700'
								: 'hover:bg-blue-500',
						]"
						@click="selectRange(range.duration)" />
				</div>
				<VCalendarDatePicker
					v-model.range="selected"
					:columns="2"
					v-bind="{ ...attrs }"
					class="flex" />
			</div>
		</template>
	</UPopover>
</template>
