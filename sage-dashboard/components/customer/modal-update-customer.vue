<script lang="ts" setup>
const modal = useModal();
const uiModal = {
	width: 'w-full sm:max-w-lg',
};
</script>

<template>
	<UModal :ui="uiModal">
		<div class="p-6">
			<header class="flex justify-between">
				<h1 class="heading2">Update Customer Details</h1>
				<UButton square size="default" color="ghost" variant="ghost" @click="modal.close">
					<UIcon name="i-heroicons-x-mark" class="h-[24px] w-[24px] text-black" />
				</UButton>
			</header>
			<main class="mt-6 flex flex-col gap-6">
				<InputText label="CUSTOMER ID" required />
				<InputText label="CUSTOMER NAME" required />
				<div class="mt-2 flex justify-end">
					<TheButton label="Update Details" />
				</div>
			</main>
		</div>
	</UModal>
</template>
