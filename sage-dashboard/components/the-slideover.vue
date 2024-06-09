<script setup lang="ts">
defineOptions({
	inheritAttrs: false,
});

interface Props {
	label?: string;
	preventClose?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	preventClose: false,
});

const isOpen = ref(false);

const uiSlideover = {
	shadow: 'shadow',
};

const uiCard = {
	body: { base: 'flex-1', padding: 'p-6' },
	ring: '',
	divide: 'divide-none',
	header: {
		padding: 'sm:px-6 pt-6 pb-0',
	},
};
</script>

<template>
	<div>
		<TheButton :label @click="isOpen = true" v-bind="$attrs" />
		<USlideover v-model="isOpen" :prevent-close="preventClose" :ui="uiSlideover">
			<UCard class="flex flex-1 flex-col" :ui="uiCard">
				<template #header>
					<div class="flex items-center justify-between">
						<h3 class="text-xl font-semibold leading-6 text-black">
							<!-- start: header slot area -->
							<slot name="header"></slot>
							<!-- end: header slot area -->
						</h3>
						<UButton
							square
							size="default"
							variant="ghost"
							color="ghost"
							@click="isOpen = false">
							<UIcon name="i-heroicons-x-mark-20-solid" class="h-[24px] w-[24px]">
							</UIcon>
						</UButton>
					</div>
				</template>
				<!-- start: body slot area -->
				<div>
					<slot name="body"></slot>
				</div>
				<!-- end: body slot area -->
			</UCard>
		</USlideover>
	</div>
</template>
