<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const date = ref(new Date());
</script>

<template>
	<BaseLayout>
		<template #sidebar-area>
			<div class="mt-6 flex flex-col space-y-6">
				<!--dynamically changing items-->
				<!-- compressors -->
				<div class="flex flex-col">
					<h1 class="text-[12px] font-bold uppercase text-[#8a8a8a]">Purdue</h1>
					<div class="mt-2 flex flex-col">
						<button
							class="h-11 w-full rounded-2xl bg-white pl-6 text-left text-base font-medium capitalize text-black hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
							c4000
						</button>
						<button
							class="h-11 w-full rounded-2xl bg-white pl-6 text-left text-base font-medium capitalize text-black hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
							c5000
						</button>
						<button
							class="h-11 w-full rounded-2xl bg-white pl-6 text-left text-base font-medium capitalize text-black hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
							shared
						</button>
					</div>
				</div>
				<!-- end of compressors -->
				<!-- tags groups -->
				<div class="flex flex-col">
					<h1 class="text-[12px] font-bold uppercase text-[#8a8a8a]">tags-groups</h1>
					<div class="mt-2 flex flex-col">
						<button
							class="h-11 w-full rounded-2xl bg-white pl-6 text-left text-base font-medium capitalize text-black hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
							tag name 01
						</button>
						<button
							class="h-11 w-full rounded-2xl bg-white pl-6 text-left text-base font-medium capitalize text-black hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
							show all
						</button>
					</div>
				</div>
				<!-- end of tag groups -->
				<!-- location weather -->
				<div class="flex flex-col">
					<h1 class="mb-2 text-[12px] font-bold uppercase text-[#8a8a8a]">
						location weather
					</h1>
					<div class="flex h-11 w-full flex-row items-center rounded-2xl bg-white">
						<div id="logo" class="ml-6 flex">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="25"
								viewBox="0 0 24 25"
								fill="none">
								<path
									d="M12 9.25C11.1077 9.23562 10.2363 9.52003 9.52424 10.058C8.81222 10.596 8.30055 11.3566 8.07061 12.2188C7.84068 13.0811 7.90568 13.9955 8.25529 14.8165C8.6049 15.6376 9.21904 16.3182 10 16.75M12 3.25V5.25M6.6 18.65L5.2 20.05M4 13.25H2M6.6 7.85L5.2 6.45M20 14.7851V4.25C20 3.14543 19.1046 2.25 18 2.25C16.8954 2.25 16 3.14543 16 4.25V14.7851C14.8044 15.4767 14 16.7694 14 18.25C14 20.4591 15.7909 22.25 18 22.25C20.2091 22.25 22 20.4591 22 18.25C22 16.7694 21.1956 15.4767 20 14.7851Z"
									stroke="#408BFB"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round" />
							</svg>
							<p class="ml-4 text-base font-medium text-black">63.84 °F</p>
						</div>
					</div>
					<div class="flex h-11 w-full flex-row items-center rounded-2xl bg-white">
						<div id="logo" class="ml-6 flex">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="25"
								viewBox="0 0 24 25"
								fill="none">
								<path
									d="M9.50929 4.91667C9.8755 4.5075 10.4077 4.25 11 4.25C12.1046 4.25 13 5.14543 13 6.25C13 7.35457 12.1046 8.25 11 8.25H2.00002M12.5093 19.5833C12.8755 19.9925 13.4077 20.25 14 20.25C15.1046 20.25 16 19.3546 16 18.25C16 17.1454 15.1046 16.25 14 16.25H2.00002M16.7639 7.25C17.3132 6.63625 18.1115 6.25 19 6.25C20.6569 6.25 22 7.59315 22 9.25C22 10.9069 20.6569 12.25 19 12.25H2"
									stroke="#408BFB"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round" />
							</svg>
							<p class="ml-4 text-base font-medium text-black">2.57 m/s</p>
						</div>
					</div>
					<div class="flex h-11 w-full flex-row items-center rounded-2xl bg-white">
						<div id="logo" class="ml-6 flex">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="25"
								viewBox="0 0 24 25"
								fill="none">
								<path
									d="M22 16.25C22 19.5637 19.3137 22.25 16 22.25C12.6863 22.25 10 19.5637 10 16.25C10 11.9363 16 2.25 16 2.25C16 2.25 22 11.9363 22 16.25Z"
									stroke="#408BFB"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round" />
								<path
									d="M8 9.25C8 10.9069 6.65685 12.25 5 12.25C3.34315 12.25 2 10.9069 2 9.25C2 7.09315 5 2.25 5 2.25C5 2.25 8 7.09315 8 9.25Z"
									stroke="#408BFB"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round" />
							</svg>
							<p class="ml-4 text-base font-medium text-black">94.0 %</p>
						</div>
					</div>
				</div>
			</div>
		</template>

		<template #navbar-dynamic-area>
			<div class="relative flex flex-row gap-6 w-full items-center">
				<VueDatePicker
					v-model="date"
					:enableTimePicker="false"
					:clearable="false"
					class="datepicker">
					<template #input-icon>
						<img
							class="input-slot-image"
							src="~/assets/svg/vue-datepicker/calendar.svg" />
					</template>
				</VueDatePicker>
				<p class="hidden md:flex uppercase text-black font-bold text-2xl">all tags-groups</p>
			</div>
		</template>

		<template #main-area>
			<div class="m-6 flex flex-col gap-6 lg:flex-row">
				<NumericalTagsContainer>
					<NumericalTagsData />
					<NumericalTagsData />
				</NumericalTagsContainer>
				<DiscreteTagsContainer> </DiscreteTagsContainer>
			</div>
		</template>
	</BaseLayout>
</template>

<style scoped>
.input-slot-image {
	padding-left: 21px;
	height: 1.25rem;
}
.datepicker {
	display: flex;
	width: 153px;
	height: 2.75rem;
	--dp-font-size: 1rem;
	--dp-border-radius: 14px;
	height: 2.75rem;
	--dp-input-icon-padding: 48px;
}
.dp__theme_light {
	--dp-background-color: #f6f7f9;
	--dp-border-color: #f6f7f9;
	--dp-border-color-hover: #f6f7f9;
}
</style>
