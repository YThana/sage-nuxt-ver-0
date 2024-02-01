<template>
	<div
		class="flex w-full flex-col rounded-3xl border border-containerBorder px-6 shadow-container lg:w-1/2">
		<!-- header for the container -->
		<div id="header" class="mt-6 flex h-9 w-full flex-row justify-between">
			<div class="flex flex-row">
				<h1 class="flex items-center text-xl font-bold text-black">Numerical Tags</h1>
				<div
					class="ml-4 hidden h-9 items-center justify-center rounded-[12px] border border-gray px-6 text-[12px] md:flex">
					2021-10-04 at 11.59.59 p.m
				</div>
			</div>
			<div
				id="searchbar"
				class="flex h-9 flex-row items-center justify-center justify-self-end rounded-[12px] bg-gray px-6">
				<svg
					class="flex"
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="16"
					viewBox="0 0 18 16"
					fill="none">
					<path
						d="M2.53942 3.25015C1.97216 2.61616 1.68854 2.29917 1.67784 2.02976C1.66854 1.79573 1.76912 1.57079 1.94972 1.42167C2.15763 1.25 2.58299 1.25 3.43371 1.25H14.5659C15.4166 1.25 15.842 1.25 16.0499 1.42167C16.2305 1.57079 16.3311 1.79573 16.3218 2.02976C16.3111 2.29917 16.0275 2.61616 15.4602 3.25015L11.1805 8.03332C11.0674 8.1597 11.0109 8.22289 10.9706 8.29481C10.9348 8.35859 10.9086 8.42726 10.8927 8.49863C10.8748 8.57911 10.8748 8.6639 10.8748 8.83348V12.8438C10.8748 12.9905 10.8748 13.0638 10.8512 13.1272C10.8303 13.1832 10.7963 13.2334 10.752 13.2736C10.7019 13.3192 10.6338 13.3464 10.4976 13.4009L7.94764 14.4209C7.67199 14.5311 7.53416 14.5863 7.42351 14.5633C7.32676 14.5432 7.24185 14.4857 7.18725 14.4033C7.12481 14.3091 7.12481 14.1607 7.12481 13.8638V8.83348C7.12481 8.6639 7.12481 8.57911 7.1069 8.49863C7.09102 8.42726 7.06478 8.35859 7.02903 8.29481C6.98871 8.22289 6.93217 8.1597 6.8191 8.03332L2.53942 3.25015Z"
						stroke="#555555"
						stroke-opacity="0.6"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round" />
				</svg>
				<input
					class="ml-4 flex w-[115px] border-none bg-gray text-base outline-none"
					placeholder="Filter" />
			</div>
		</div>
		<!-- end of header for the container -->
		<!-- fetching data -->
		<div class="my-6 space-y-2 overflow-x-auto" id="numericalTags">
			<slot></slot>
		</div>
		<!-- end of fetching data -->
	</div>
</template>
