<script setup lang="ts">
const selected = ref(true);
</script>

<template>
	<div
		class="absolute bottom-6 left-6 right-6 flex flex-col gap-6 rounded-3xl bg-primaryColor-50 p-6 shadow ring-1 ring-primaryColor-200 sm:inset-x-0 sm:left-auto sm:right-6 sm:w-[385px]">
		<div class="flex flex-col gap-2">
			<SelectedNumericalTagData
				v-model="selected"
				tag-name="Capacity Control PositCapacity Control PositCapacity Control Posit"
				tag-id="a_c_4000_meters_capacity_side_cntrl" />
			<SelectedNumericalTagData
				v-model="selected"
				tag-name="Capacity Control Position ZT-4003 (CNTRL)"
				tag-id="a_c_4000_meters_capacity_side_cntrl" />
		</div>
		<div class="flex w-full justify-between">
			<TheButton label="Open in New Window" />
			<TheButton label="Unselect All" variant="dark" />
		</div>
	</div>
</template>

<style scoped></style>
