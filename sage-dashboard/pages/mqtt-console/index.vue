<script setup lang="ts"></script>

<template>
	<BaseLayout>
		<template #sidebar-area>
			<div class="flex h-full flex-col gap-6">
				<div class="flex grow flex-col gap-2">
					<ButtonSidebar label="Home" icon="i-heroicons-home" />
					<ButtonSidebar label="Customers" icon="i-heroicons-user-group" />
					<ButtonSidebar label="MQTT Console" icon="i-heroicons-command-line" active />
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
				<div
					class="mx-auto max-w-[1050px] rounded-3xl p-6 shadow ring-1 ring-primaryColor-200">
					<header class="heading2">MQTT Console</header>

					<section class="mt-6 flex flex-col gap-4 sm:flex-row sm:gap-2">
						<div>
							<TheButton trailing icon="i-heroicons-chevron-down" label="Customers" />
						</div>
						<div class="flex gap-2">
							<div class="w-full sm:w-[350px] md:w-[420px]">
								<InputText />
							</div>
							<TheButton variant="dark" label="Stop" />
						</div>
					</section>

					<section class="mt-6">
						<!---start: table header-------------------------------------------->
						<div
							class="flex gap-4 border-b border-secondaryColor-100 font-bold text-secondaryColor-600">
							<h3 class="w-[120px] sm:w-[250px]">Value</h3>
							<h3 class="flex-1">Key</h3>
						</div>
						<!---end: table header-------------------------------------------->

						<!---start: table body-------------------------------------------->
						<div class="flex flex-col divide-y divide-secondaryColor-100">
							<!---start: table data-------------------------------------------->
							<div class="flex gap-4 py-2 text-black">
								<p class="w-[120px] overflow-auto text-nowrap sm:w-[250px]">
									2024-05-10T03:56:43.000Z
								</p>
								<p class="flex-1 overflow-auto text-nowrap">
									a.capacity_flow_limiters_flow_control_value_a
								</p>
							</div>
							<!---end: table data-------------------------------------------->
						</div>
						<!---end: table body-------------------------------------------->
					</section>
				</div>
			</div>
		</template>
	</BaseLayout>
</template>

<style scoped></style>
