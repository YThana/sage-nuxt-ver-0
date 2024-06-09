<template>
	<div
		class="flex w-full flex-1 flex-col items-center justify-center rounded-2xl bg-primaryColor-200 py-2 transition-all delay-200 ease-in-out hover:ring-1 hover:ring-primaryColor-500">
		<slot name="icon"></slot>
		<div class="mt-4 text-sm font-bold text-primaryColor-500">
			<slot></slot>
		</div>
	</div>
</template>
