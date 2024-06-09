<script setup lang="ts">
const plot = ref(false);
const plot1 = ref(false);
const isOn = ref(true);
const selected = ref(false);
const sidebarDiscrete = ref(true);
</script>

<template>
	<BaseLayout>
		<template #sidebar-area>
			<div class="flex flex-1 flex-col gap-6">
				<!-- dynamically changing items-->

				<!-- switch customer button-->
				<div class="w-full">
					<MenuSwitchCustomer />
				</div>
				<!-- compressors -->
				<div class="flex flex-col">
					<h1 class="text-[12px] font-bold uppercase text-secondaryColor-600">Purdue</h1>
					<div class="mt-2 flex flex-col gap-2">
						<ButtonSidebar label="c4000" active />
						<ButtonSidebar label="c5000" />
						<ButtonSidebar label="shared" />
					</div>
				</div>
				<!-- end of compressors -->

				<!-- tags groups -->
				<div class="flex flex-col">
					<h1 class="text-[12px] font-bold uppercase text-secondaryColor-600">
						tags-groups
					</h1>
					<div class="mt-2 flex flex-col gap-2">
						<ButtonSidebar label="tags-groups" active />
						<ButtonSidebar label="Reset Groups">
							<template #trailing>
								<div class="flex flex-1 items-end justify-end">
									<UIcon name="i-heroicons-backspace" class="h-[18px] w-[18px]" />
								</div>
							</template>
						</ButtonSidebar>
					</div>
				</div>
				<!-- end of tag groups -->

				<!-- location weather -->
				<div class="flex flex-col">
					<h1 class="mb-2 text-[12px] font-bold uppercase text-secondaryColor-600">
						location weather
					</h1>
					<div class="flex gap-2">
						<LocationWeather>
							<template #icon>
								<IconTemperature class="stroke-primaryColor-500" />
							</template>
							63.84 °F
						</LocationWeather>
						<LocationWeather>
							<template #icon>
								<IconWind class="stroke-primaryColor-500" />
							</template>
							2.57 m/s
						</LocationWeather>
						<LocationWeather>
							<template #icon>
								<IconHumidity class="stroke-primaryColor-500" />
							</template>
							94.0 %
						</LocationWeather>
					</div>
				</div>

				<!-- start:  slideover button for discrete tags-------------------------------------------->
				<div class="mt-2">
					<TheSlideover
						label="View Discrete Tags"
						:class="['w-full justify-start', plot ? 'hidden xl:flex' : 'hidden']"
						variant="dark">
						<!-- start: header part of the slideover -------------------------------------------->
						<template #header>
							<h3 class="heading3">Discrete Tags</h3>
						</template>
						<!-- end: body part of the header-------------------------------------------->

						<!-- start: body part of the slideover-------------------------------------------->
						<template #body>
							<div class="flex flex-col gap-6">
								<InputSearch></InputSearch>
								<div>
									<!-- start:table header-------------------------------------------->
									<div
										class="flex w-full border-b border-b-secondaryColor-100 pb-2 font-bold text-secondaryColor-600">
										<h4 class="flex-1">Tag</h4>
										<h4 class="w-[50px]">Status</h4>
									</div>
									<!-- end: table header-------------------------------------------->

									<div class="flex flex-col divide-y divide-secondaryColor-100">
										<!-- start: table body-------------------------------------------->
										<div class="flex items-center py-2">
											<div class="flex flex-1 flex-col overflow-hidden">
												<TheTooltip
													text="Capacity Control Position ZT-4003 (CNTRL)">
													<p class="truncate text-black">
														Capacity Control Position ZT-4003 (CNTRL)
														some lorem text
													</p>
												</TheTooltip>
												<TheTooltip
													text="lorem_ipsuj_abdjreijfa_jfiajfoajfij_fdafjaijfioj_ijfaijfiojads_fijajflorem_ipsuj">
													<p
														class="truncate text-sm text-secondaryColor-400">
														lorem_ipsuj_abdjreijfa_jfiajfoajfij_fdafjaijfioj_ijfaijfiojads_fijajflorem_ipsuj_abdjreijfa_jfiajfoajfij_fdafjaijfioj_ijfaijfiojads_fijajf
													</p>
												</TheTooltip>
											</div>
											<div class="flex pl-4">
												<button
													class="flex h-8 w-[48px] items-center justify-center rounded-full"
													:class="
														isOn
															? 'bg-primaryColor-300 text-secondaryColor-800'
															: 'bg-secondaryColor-300 text-primaryColor-50'
													">
													On
												</button>
											</div>
										</div>
										<!-- end: table body-------------------------------------------->
									</div>
								</div>
							</div>
						</template>
						<!-- end: body part of the slideover-------------------------------------------->
					</TheSlideover>
				</div>
				<!-- end:  slideover button for discrete tags-------------------------------------------->
			</div>
			<div class="mt-6 flex flex-col">
				<ButtonSidebar
					label="Chat SCADA"
					icon="i-heroicons-square-3-stack-3d"
					to="/chat-scada">
					<template #trailing>
						<div
							class="flex h-4 items-center rounded-full bg-primaryColor-400 px-2 text-xs font-normal text-primaryColor-50">
							Beta
						</div>
					</template>
				</ButtonSidebar>
			</div>
		</template>

		<template #main-area>
			<div class="grid w-full grid-cols-1 gap-6 p-6 xl:grid-cols-2">
				<!-- start: numerical tags container-------------------------------------------->
				<section :class="['w-full', plot && 'xl:col-span-2']">
					<div class="rounded-3xl p-6 shadow ring-1 ring-primaryColor-200">
						<header
							class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
							<div class="flex items-center gap-4">
								<h3 class="heading3 text-nowrap">Numerical Tags</h3>
								<div
									class="flex h-10 items-center gap-2 rounded-2xl px-4 text-primaryColor-500 ring-1 ring-primaryColor-600">
									<UIcon name="i-heroicons-clock" class="h-5 w-5 shrink-0" />
									<span class="line-clamp-1">2023-10-04 at 11:59:59 PM</span>
								</div>
							</div>
							<div class="sm:pl-2">
								<InputSearch />
							</div>
						</header>

						<section class="mt-6">
							<!-- start: numerical tags table header-------------------------------------------->
							<div
								class="flex w-full gap-2 border-b border-b-secondaryColor-100 pb-2 font-bold text-secondaryColor-600">
								<h4 class="w-32">Real-Time</h4>
								<h4 class="flex-1">Tag</h4>
								<h4 class="w-[60px]">Value</h4>
								<h4 class="w-[60px]">Options</h4>
							</div>
							<!-- end: numerical tags table header-------------------------------------------->

							<!-- start: numerical tags table body ------------------------------------------->
							<div class="flex flex-col divide-y divide-secondaryColor-100">
								<!-- start: numerical tag table item ------------------------------------------->
								<div class="flex items-center gap-2 py-2">
									<section class="w-32">
										<div class="flex shrink-0 flex-col items-center">
											<div
												class="h-[30px] w-full rounded-lg bg-primaryColor-50"></div>
											<div
												class="-mt-2 flex max-w-max items-center justify-center rounded-[3px] bg-primaryColor-400 px-[5px] text-sm font-bold text-primaryColor-50">
												12.45
											</div>
										</div>
									</section>

									<section class="flex-1 overflow-auto">
										<div class="flex flex-col justify-center text-nowrap">
											<p class="text-black">
												Capacity Control Position ZT-4003 (CNTRL)
											</p>
											<p class="text-sm text-secondaryColor-400">
												lorem_ipsuj_abdjreijfa_jfiajfoajfij_fdafjaijfioj_ijfaijfiojads_fijajf
											</p>
										</div>
									</section>

									<section class="flex w-[60px] font-medium text-black">
										56.65
									</section>

									<section class="flex w-[60px] gap-4">
										<InputCheckbox v-model="selected" />
										<UIcon
											name="i-heroicons-chart-bar"
											:class="[
												'h-[20px] w-[20px]',
												plot ? 'text-primaryColor-500' : 'text-black',
											]"
											@click="plot = !plot" />
									</section>
								</div>
								<!-- end: numerical tag table item ------------------------------------------->
							</div>
							<!-- end: numerical tags table body ------------------------------------------->
						</section>
					</div>
				</section>
				<!-- end: numerical tags container-------------------------------------------->

				<!-- start: discrete tags container-------------------------------------------->
				<section :class="['w-full', plot && 'xl:hidden']">
					<div class="rounded-3xl p-6 shadow ring-1 ring-primaryColor-200">
						<header class="flex flex-col gap-4 sm:flex-row sm:justify-between">
							<h3 class="heading3 text-nowrap">Discrete Tags</h3>
							<InputSearch />
						</header>

						<section class="mt-6">
							<!-- start:table header-------------------------------------------->
							<div
								class="flex w-full border-b border-b-secondaryColor-100 pb-2 font-bold text-secondaryColor-600">
								<h4 class="flex-1">Tag</h4>
								<h4 class="w-[50px]">Status</h4>
							</div>
							<!-- end: table header-------------------------------------------->

							<!-- start: table body-------------------------------------------->
							<div class="flex items-center gap-2 py-2">
								<div class="flex flex-1 flex-col overflow-hidden">
									<p class="truncate text-black">
										Capacity Control Position ZT-4003 (CNTRL) Capacity Control
										Position ZT-4003 (CNTRL)
									</p>

									<p class="truncate text-sm text-secondaryColor-400">
										quaerendum_liber_omittam_hinc_constituam_reprehendunt_posidonium_docendi_vituperatoribus_scripta_homero
									</p>
								</div>

								<div class="w-[50px]">
									<div
										class="flex h-8 w-full items-center justify-center rounded-full"
										:class="
											isOn
												? 'bg-primaryColor-300 text-secondaryColor-800'
												: 'bg-secondaryColor-300 text-primaryColor-50'
										">
										On
									</div>
								</div>
							</div>
							<!-- end: table body-------------------------------------------->
						</section>
					</div>
				</section>
				<!-- end: discrete tags container-------------------------------------------->
				<MenuSelectedNumericalTags v-if="selected" />
			</div>
		</template>
	</BaseLayout>
</template>
