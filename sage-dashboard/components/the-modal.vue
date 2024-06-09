<script setup lang="ts">
interface Props {
	label?: string;
	fullScreen?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	label: 'open',
	fullScreen: false,
});

const isOpen = ref(false);

const uiModal = {
	width: 'w-full sm:max-w-lg',
};
</script>

<template>
	<div>
		<TheButton :label @click="isOpen = true" />

		<UModal v-model="isOpen" :ui="uiModal" :fullscreen="fullScreen">
			<!-- start: main area -->
			<div class="p-6">
				<slot></slot>
			</div>
			<!-- end: main area -->
			<div class="flex justify-end px-6 pb-6">
				<TheButton variant="dark" label="close" @click="isOpen = false"></TheButton>
			</div>
		</UModal>
	</div>
</template>
