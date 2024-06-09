<script setup lang="ts">
// -------------------------------------------------------------------------------------------------
import type { RadioGroupOption } from '~/components/form/inputs/input-radio-group.vue';
import type { CheckboxGroupOptions } from '~/components/form/inputs/input-checkbox-group.vue';
// -------------------------------------------------------------------------------------------------
const radioGroupOptions: RadioGroupOption[] = [
	{
		value: 'email',
		label: 'Email',
	},
	{
		value: 'sms',
		label: 'Phone (SMS)',
	},
	{
		value: 'push',
		label: 'Push notification',
	},
];
const checkboxGroupOptions: CheckboxGroupOptions[] = [
	{
		label: 'apple',
	},
	{
		label: 'orange',
		disabled: true,
	},
	{
		label: 'mango',
		required: true,
	},
];
const selected = ref<string[]>([]);
// -------------------------------------------------------------------------------------------------
</script>

<template>
	<div>
		<ContainerLayout>
			<div class="p-6">
				<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					<div
						class="flex w-full flex-col items-center justify-center rounded-3xl bg-white p-6 shadow ring-1 ring-primaryColor-200">
						<h1 class="mb-7 flex text-xl font-bold text-black">Page Links</h1>
						<div class="flex flex-col items-center gap-6">
							<TheButton label="Dashboard" to="/dashboard" />
							<TheButton label="Home" to="/home" />
							<TheButton label="Home-2" to="/home-2" />
							<TheButton label="Chat Box" to="/chat-scada" />
							<TheButton label="User Profile" to="/user-profile" />
							<TheButton label="Customer" to="/customer" />
							<TheButton label="Device" to="/device" />
							<TheButton label="All Customers" to="/all-customers" />
						</div>
					</div>
					<div
						class="flex w-full flex-col items-center justify-center rounded-3xl bg-white p-6 shadow ring-1 ring-primaryColor-200">
						<h1 class="mb-7 flex text-xl font-bold text-black">Buttons</h1>
						<h2 class="mb-6 flex text-lg font-bold text-black">Primary Buttons</h2>
						<div class="flex flex-col items-center gap-4">
							<TheButton label="button" />
							<TheButton variant="secondary" label="button" />
							<TheButton variant="dark" label="button" />
							<TheButton variant="ghost" label="button" />
							<TheButton icon="i-heroicons-arrow-right" label="button" />
							<TheButton
								block
								icon="i-heroicons-arrow-right"
								trailing
								label="button" />
							<TheButton block size="sm" label="small button" />
						</div>
						<h2 class="mb-6 mt-3 flex text-lg font-bold text-black">Sidebar Buttons</h2>
						<div class="flex flex-col gap-4">
							<ButtonSidebar label="button" />
						</div>
						<h2 class="mb-6 mt-6 flex text-lg font-bold text-black">Modal Window</h2>
						<TheModal label="open modal window">
							<p class="text-center text-2xl font-bold">The Heading</p>
							<p class="mt-6 text-justify text-base">
								Lorem Ipsum is simply dummy text of the printing and variantsetting
								industry. Lorem Ipsum has been the industry's standard dummy text
								ever since the 1500s, when an unknown printer took a galley of
								variant and scrambled it to make a variant specimen book. It has
								survived not only five centuries, but also the leap into electronic
								variantsetting, remaining essentially unchanged. It was popularised
								in the 1960s with the release of Letraset sheets containing Lorem
								Ipsum passages, and more recently with desktop publishing software
								like Aldus PageMaker including versions of Lorem Ipsum.
							</p>
						</TheModal>
						<h2 class="mb-6 mt-6 flex text-lg font-bold text-black">Slideover</h2>
						<TheSlideover label="open slideover">
							<template #header>Slideover heading</template>
							<template #body
								>Lorem Ipsum is simply dummy text of the printing and variantsetting
								industry. Lorem Ipsum has been the industry's standard dummy text
								ever since the 1500s, when an unknown printer took a galley of
								variant and scrambled it to make a variant specimen book. It has
								survived not only five centuries, but also the leap into electronic
								variantsetting, remaining essentially unchanged. It was popularised
								in the 1960s with the release of Letraset sheets containing Lorem
								Ipsum passages, and more recently with desktop publishing software
								like Aldus PageMaker including versions of Lorem Ipsum.
							</template>
						</TheSlideover>
					</div>
					<div
						class="flex w-full flex-col items-center justify-center rounded-3xl bg-white p-6 shadow ring-1 ring-primaryColor-200 md:col-span-2 lg:col-span-1">
						<h1 class="mb-7 flex text-xl font-bold text-black">Input Fields</h1>
						<div class="flex flex-col gap-5">
							<InputText placeholder="enter your name..." label="name" />
							<InputText placeholder="enter your name..." label=" name" />
							<InputText placeholder="enter your email..." label=" email" />
							<InputPassword placeholder="enter your password..." label="password" />
							<InputNumber placeholder="enter number" label="number" />
							<div>
								<h3 class="mb-2 text-center text-base font-bold">
									Radio Button (col)
								</h3>
								<InputRadioGroup :options="radioGroupOptions" />
							</div>
							<div>
								<h3 class="mb-2 text-center text-base font-bold">
									Radio Button (row)
								</h3>
								<InputRadioGroup :options="radioGroupOptions" row />
							</div>
							<div>
								<h3 class="mb-2 text-center text-base font-bold">Checkbox</h3>
								<InputCheckbox label="label" />
							</div>
							<h3 class="mb-2 text-center text-base font-bold">
								Checkbox Group (col)
							</h3>
							<div class="space-y-6">
								<InputCheckboxGroup
									v-model="selected"
									:options="checkboxGroupOptions" />
							</div>
							<h3 class="mb-2 text-center text-base font-bold">
								Checkbox Group (row)
							</h3>
							<InputCheckboxGroup
								row
								v-model="selected"
								:options="checkboxGroupOptions" />
						</div>
						<h2 class="mb-2 mt-5 text-lg font-bold">search bar</h2>
						<InputSearch />
					</div>
				</div>
			</div>
		</ContainerLayout>
	</div>
</template>
