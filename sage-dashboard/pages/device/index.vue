<script setup lang="ts">
import MenuModifyDevice from '~/components/device/menu-modify-device.vue';
</script>

<template>
	<BaseLayout>
		<template #sidebar-area>
			<div class="flex h-full flex-col gap-6">
				<div class="flex grow flex-col gap-2">
					<ButtonSidebar label="Home" icon="i-heroicons-home" />
					<ButtonSidebar label="Customers" icon="i-heroicons-user-group" />
					<ButtonSidebar label="MQTT Console" icon="i-heroicons-command-line" />
				</div>

				<div class="flex">
					<ButtonSidebar
						label="Manage Users"
						icon="i-heroicons-user-group"
						class="w-full" />
				</div>
			</div>
		</template>

		<template #main-area>
			<div class="w-full p-6">
				<!---start: device details header-------------------------------------------->
				<div class="rounded-2xl bg-primaryColor-100 p-6 ring-1 ring-primaryColor-200">
					<div class="flex justify-between">
						<div
							class="flex flex-1 flex-col gap-4 sm:gap-6 xl:flex-row xl:gap-12 2xl:gap-24">
							<div
								class="flex flex-col gap-4 sm:flex-row sm:gap-6 xl:gap-12 2xl:gap-24">
								<div class="flex flex-col gap-0 sm:w-1/2 sm:gap-[5px] xl:w-auto">
									<h5 class="text-sm font-bold uppercase text-secondaryColor-600">
										device name
									</h5>
									<p class="heading2 capitalize">Seaboard</p>
								</div>

								<div class="flex flex-col gap-[5px] sm:w-1/2 xl:w-auto">
									<h5 class="text-sm font-bold uppercase text-secondaryColor-600">
										device label
									</h5>
									<div class="flex items-center gap-2">
										<p class="heading2 capitalize">A</p>
										<p class="text-[15px] font-bold text-primaryColor-300">1</p>
									</div>
								</div>
							</div>

							<div
								class="flex flex-col gap-4 sm:flex-row sm:gap-6 xl:gap-12 2xl:gap-24">
								<div class="flex flex-col gap-[5px] sm:w-1/2 xl:w-auto">
									<h5 class="text-sm font-bold uppercase text-secondaryColor-600">
										daq
									</h5>
									<p class="heading2">daq1</p>
								</div>

								<div class="flex flex-col gap-[5px] sm:w-1/2 xl:w-auto">
									<h5 class="text-sm font-bold uppercase text-secondaryColor-600">
										mqtt rule
									</h5>
									<p class="heading2">1007/daq1/rule1</p>
								</div>
							</div>
						</div>

						<div class="pl-6">
							<!--							<UButton size="default" square color="ghost" variant="ghost">-->
							<!--								<UIcon-->
							<!--									name="i-heroicons-cog-8-tooth"-->
							<!--									class="h-[24px] w-[24px] text-primaryColor-500" />-->
							<!--							</UButton>-->
							<MenuModifyDevice />
						</div>
					</div>
				</div>
				<!---end: device details header-------------------------------------------->

				<!---start: Tags gruoup and config anomalies-------------------------------------------->
				<!--				<div class="mt-6 flex flex-col gap-6 md:flex-row">-->
				<div class="mt-6 w-full rounded-3xl p-6 shadow ring-1 ring-primaryColor-200">
					<div class="flex justify-between">
						<h2 class="heading2">Tags-Group</h2>
						<TheButton label="Tags-Group" icon="i-heroicons-plus" />
					</div>
					<div class="mt-6 flex flex-wrap gap-4">
						<TheButton variant="primary-light" label="Test Tags Group Updated" />
						<TheButton variant="primary-light" label="JDC" />
						<TheButton variant="primary-light" label="Pressure 1" />
					</div>
				</div>

				<!--					<div-->
				<!--						class="w-full rounded-3xl p-6 shadow ring-1 ring-primaryColor-200 md:w-1/2">-->
				<!--						<div class="flex justify-between">-->
				<!--							<h2 class="heading2">Tags</h2>-->
				<!--							<TheButton label="Tags" icon="i-heroicons-plus" />-->
				<!--						</div>-->
				<!--						<p class="mt-6 text-black">-->
				<!--							<span class="text-primaryColor-600">Configure</span> anomalies threshold-->
				<!--							values.-->
				<!--						</p>-->
				<!--					</div>-->
				<!--				</div>-->
				<!---end: Tags gruoup and config anomalies-------------------------------------------->

				<!---start: Numerical Tags and Discrete Tags-------------------------------------------->
				<div class="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
					<div class="w-full rounded-3xl p-6 shadow ring-1 ring-primaryColor-200">
						<header class="flex justify-between">
							<h1 class="heading2">Numerical Tags</h1>
							<div>
								<TheButton icon="i-heroicons-plus" label="Tag" />
							</div>
						</header>
						<section class="mt-6">
							<!---start: tag data-------------------------------------------->
							<div
								class="group relative rounded-2xl p-4 ring-1 ring-secondaryColor-100 hover:bg-secondaryColor-50">
								<div class="absolute right-4 top-4 hidden group-hover:flex">
									<TheButton icon="i-heroicons-pencil-square" label="Edit" />
								</div>

								<div class="flex flex-col gap-[5px] overflow-auto">
									<p class="font-medium text-black">
										k-34001-A Capacity Slide Flow LImiter FC-34005
									</p>
									<!--                  <p class="text-sm line-clamp-1 text-secondaryColor-600">(k-34001-A Capacity Slide Flow LImiter FC-34005k-34001-A Capacity Slide Flow LImiter FC-34005)</p>-->
									<p class="flex flex-1 text-sm text-secondaryColor-600">
										(k_34001_A_Capacity_Slide_Flow_LImiter_FC_34005kk_34001_A_Capacity_Slide_Flow_LImiter_FC_34005k)
									</p>
								</div>

								<div class="mt-4">
									<h3
										class="text-base font-bold capitalize text-primaryColor-600">
										Mode Tags
									</h3>

									<div class="mt-2 flex flex-col gap-2 overflow-auto">
										<p class="text-black">
											Enabled
											<span class="text-sm text-secondaryColor-600">
												(k_34001_A_Capacity_Slide_Flow_LImiter_FC_34005k)
											</span>
										</p>

										<p class="text-black">
											Enabled
											<span class="text-sm text-secondaryColor-600">
												(k_34001_A_Capacity_Slide_Flow_LImiter_FC_34005k)
											</span>
										</p>
									</div>
								</div>
							</div>
							<!---end: tag data-------------------------------------------->

							<!---start: duplicate data-------------------------------------------->
							<!---end: duplicate data-------------------------------------------->
						</section>
					</div>

					<div class="w-full rounded-3xl p-6 shadow ring-1 ring-primaryColor-200">
						<header class="flex justify-between">
							<h1 class="heading2">Discrete Tags</h1>
							<div>
								<TheButton icon="i-heroicons-plus" label="Tag" />
							</div>
						</header>
					</div>
				</div>
				<!---end: Numerical Tags and Discrete Tags-------------------------------------------->
			</div>
		</template>
	</BaseLayout>
</template>

<style scoped></style>
