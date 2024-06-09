<script setup lang="ts">
import type { PopperOptions } from '#ui/types';

const popper: PopperOptions = {
	placement: 'right-end',
	scroll: true,
};
const uiPopper = {
	rounded: 'rounded-3xl',
	background: 'bg-primaryColor-100',
	trigger: 'flex w-full',
	container: 'z-50 group',
	shadow: 'shadow',
	ring: 'ring-1 ring-primaryColor-200',
	width: 'w-[470px]',
};
</script>

<template>
	<UPopover :ui="uiPopper" :popper>
		<ButtonSidebar label="Customers" icon="i-heroicons-arrow-right" class="w-full" />

		<template #panel>
			<div class="flex max-h-[490px] flex-col gap-6 overflow-auto p-6">
				<div class="flex flex-col gap-4">
					<h3 class="font-bold uppercase text-primaryColor-600">sc-johnson</h3>
					<div class="flex gap-4 overflow-x-auto">
						<TheButton variant="ghost" label="Comp 1" />
						<TheButton variant="ghost" label="Comp 2" />
						<TheButton variant="ghost" label="Comp 3" />
					</div>
				</div>
				<div class="flex flex-col gap-4">
					<h3 class="font-bold uppercase text-primaryColor-600">
						test customer [internal test case]
					</h3>
					<div class="flex gap-4 overflow-x-auto">
						<TheButton variant="ghost" label="Comp Name 1" />
						<TheButton variant="ghost" label="Compressor 1" />
						<TheButton variant="ghost" label="Comp 1" />
						<TheButton variant="ghost" label="Comp 2" />
					</div>
				</div>
				<div class="flex flex-col gap-4">
					<h3 class="font-bold uppercase text-primaryColor-600">purdue</h3>
					<div class="flex gap-4 overflow-x-auto">
						<TheButton variant="ghost" label="C4000" />
						<TheButton variant="ghost" label="C5000" />
						<TheButton variant="ghost" label="Shared" />
					</div>
				</div>
				<div class="flex flex-col gap-4">
					<h3 class="font-bold uppercase text-primaryColor-600">sc-johnson</h3>
					<div class="flex gap-4 overflow-x-auto">
						<TheButton variant="ghost" label="A" />
						<TheButton variant="ghost" label="B" />
						<TheButton variant="ghost" label="C" />
						<TheButton variant="ghost" label="D" />
					</div>
				</div>
				<div class="flex flex-col gap-4">
					<h3 class="font-bold uppercase text-primaryColor-600">sc-johnson</h3>
					<div class="flex gap-4 overflow-x-auto">
						<TheButton variant="ghost" label="Comp 1" />
						<TheButton variant="ghost" label="Comp 2" />
						<TheButton variant="ghost" label="Comp 3" />
						<TheButton variant="ghost" label="Comp 4" />
					</div>
				</div>
			</div>
		</template>
	</UPopover>
</template>

<style scoped></style>
