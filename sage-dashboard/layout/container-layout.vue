<script setup lang="ts"></script>

<template>
	<div class="relative h-screen w-screen md:p-6">
		<div
			class="h-full w-full overflow-hidden shadow ring-1 ring-primaryColor-200 md:rounded-3xl">
			<div class="h-full w-full overflow-auto">
				<slot />
			</div>
		</div>
	</div>
</template>

<style scoped></style>
