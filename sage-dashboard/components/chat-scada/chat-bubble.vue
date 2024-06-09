<script setup lang="ts">
interface Props {
	query?: any;
	answer?: any;
	displayName?: string;
}

const props = defineProps<Props>();

const displayNameFirstLetter = computed(() => {
	return props.displayName?.charAt(0);
});
</script>

<template>
	<div class="flex flex-col gap-6">
		<!-- start: query  -->
		<div class="flex flex-row">
			<div
				class="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-primaryColor-500 text-xl font-bold capitalize text-secondaryColor-50 ring-2 ring-secondaryColor-100">
				{{ displayNameFirstLetter }}
			</div>
			<div :class="'rounded-b-[21px] rounded-tr-[21px] bg-primaryColor-50 p-4'">
				<div class="text-base text-black">
					{{ query }}
				</div>
			</div>
		</div>
		<!-- end: query -->

		<!-- start: answer  -->
		<div class="flex flex-row">
			<div
				class="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-primaryColor-500 ring-2 ring-secondaryColor-100">
				<UIcon name="i-heroicons-square-3-stack-3d" class="h-[18px] w-[18px] text-white" />
			</div>
			<div class="rounded-b-[21px] rounded-tr-[21px] bg-secondaryColor-50 p-4">
				<div class="text-base text-black">
					{{ answer }}
				</div>
			</div>
		</div>
		<!-- end: answer -->
	</div>
</template>
