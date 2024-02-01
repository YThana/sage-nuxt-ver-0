<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
</script>

<template>
	<Menu as="div" class="relative inline-block text-left">
		<div>
			<MenuButton class="flex h-11 w-11 items-center justify-center rounded-full bg-gray">
				<div class="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
					<p class="font-bold uppercase text-white">A</p>
				</div>
			</MenuButton>
		</div>

		<transition
			enter-active-class="transition duration-100 ease-out"
			enter-from-class="transform scale-95 opacity-0"
			enter-to-class="transform scale-100 opacity-100"
			leave-active-class="transition duration-75 ease-in"
			leave-from-class="transform scale-100 opacity-100"
			leave-to-class="transform scale-95 opacity-0">
			<MenuItems
				class="absolute right-[-14px] mt-2 w-64 origin-top-right space-y-2 divide-y divide-gray rounded-2xl bg-white p-4 text-base text-black shadow-userProfileMenu focus:outline-none">
				<div>
					<MenuItem v-slot="{ active }" @click="async()=>await navigateTo('/user-profile')">
						<button
							:class="[
								active && 'bg-gray',
								'group flex h-9 w-full items-center rounded-[12px] px-4 py-2',
							]">
							<img
								src="~/assets/svg/user-profile-menu/user-profile.svg"
								class="pr-4" />
							User Profile
						</button>
					</MenuItem>
					<MenuItem v-slot="{ active }" class="mt-2">
						<button
							:class="[
								active && 'bg-gray',
								'group flex h-9 w-full items-center rounded-[12px] px-4 py-2',
							]">
							<img src="~/assets/svg/user-profile-menu/settings.svg" class="pr-4" />
							Settings
						</button>
					</MenuItem>
				</div>
				<div>
					<MenuItem v-slot="{ active }" class="mt-2">
						<button
							:class="[
								active && 'bg-gray',
								'group flex h-9 w-full items-center rounded-[12px] px-4 py-2',
							]">
							<img src="~/assets/svg/user-profile-menu/log-out.svg" class="pr-4" />
							Sign-Out
						</button>
					</MenuItem>
				</div>
			</MenuItems>
		</transition>
	</Menu>
</template>
