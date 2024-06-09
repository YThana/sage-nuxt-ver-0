<script setup lang="ts"></script>

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
			<div class="mx-auto max-w-2xl p-6">
				<div class="flex w-full flex-col gap-6">
					<!---start: Header-------------------------------------------->
					<div
						class="flex flex-row items-center justify-between rounded-2xl bg-primaryColor-100 px-6 py-4 ring-1 ring-primaryColor-200">
						<h2 class="flex items-center">
							<span class="heading2 line-clamp-1"> Seaboard </span>
							<span class="pl-4 pr-4 text-base font-bold text-primaryColor-300">
								1007
							</span>
						</h2>
						<div class="flex">
							<MenuEditCustomer />
						</div>
					</div>
					<!---end: Header-------------------------------------------->

					<!---start: Devices Section-------------------------------------------->
					<div class="rounded-3xl p-6 shadow ring-1 ring-primaryColor-200">
						<div class="flex flex-col gap-6">
							<div class="flex items-center justify-between">
								<h2 class="heading2">Devices</h2>
								<TheButton label="Device" icon="i-heroicons-plus" />
							</div>
							<div class="flex flex-wrap gap-4">
								<TheButton label="A" variant="ghost" />
								<TheButton label="B" variant="ghost" />
								<TheButton label="C" variant="ghost" />
								<TheButton label="D" variant="ghost" />
								<TheButton label="Shared" variant="ghost" />
							</div>
						</div>
					</div>
					<!---end: Devices Section-------------------------------------------->

					<!---start: Users-------------------------------------------->
					<div class="rounded-3xl shadow ring-1 ring-primaryColor-200">
						<TabSettings />
					</div>

					<!---end: Users-------------------------------------------->
				</div>
			</div>
		</template>
	</BaseLayout>
</template>

<style scoped></style>
