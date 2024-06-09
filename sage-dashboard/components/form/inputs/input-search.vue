<script setup lang="ts">
import type { InputSize } from '#ui/types';

interface Props {
	size?: InputSize;
}

const props = withDefaults(defineProps<Props>(), {
	size: 'default',
});

const value = defineModel<any>();
</script>

<template>
	<UInput
		name="value"
		v-model="value"
		color="primary"
		variant="outline"
		:size
		placeholder="Search..."
		autocomplete="off"
		icon="i-heroicons-funnel">
		<template #trailing>
			<UButton size="sm" v-show="value !== ''" variant="link" @click="value = ''" square>
				<UIcon
					name="i-heroicons-x-mark-20-solid"
					class="h-[18px] w-[18px] text-primaryColor-500"></UIcon>
			</UButton>
		</template>
	</UInput>
</template>
