<script setup lang="ts">
interface Props {
	tagName: string;
	tagId: string;
}
const checked = defineModel<boolean>();
const props = defineProps<Props>();
</script>

<template>
	<div class="flex">
		<div class="flex flex-1 flex-col gap-2">
			<p class="line-clamp-1 text-base text-primaryColor-500">
				{{ props.tagName }}
			</p>
			<p class="text-sm text-secondaryColor-400">{{ props.tagId }}</p>
		</div>
		<div class="pl-4">
			<InputCheckbox v-model="checked" />
		</div>
	</div>
</template>

<style scoped></style>
