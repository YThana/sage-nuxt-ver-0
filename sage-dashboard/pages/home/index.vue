<script setup lang="ts"></script>

<template>
	<ContainerLayout>
		<div class="flex h-full flex-col">
			<nav
				class="z-10 flex items-center justify-between overflow-hidden rounded-b-lg p-6 shadow">
				<div class="heading1 flex flex-1">
					<NuxtLink to="/">
						<IconLogo class="h-7 w-auto text-black sm:h-10" />
					</NuxtLink>
				</div>
				<div class="flex items-center">
					<MenuUserProfile
						:bg-color="false"
						displayName="Anderson Mark"
						email="anderson.mark@gmail.com"
						:notification="13" />
				</div>
			</nav>
			<section class="flex-1 overflow-auto p-6">
				<h1 class="heading1 mb-6 flex">Welcome Anderson!</h1>
				<div class="flex flex-col gap-6 xl:flex-row">
					<div class="flex flex-col gap-6 md:h-[38rem] md:flex-1 md:flex-row">
						<div
							class="flex w-full flex-col gap-6 rounded-3xl bg-white p-6 shadow ring-1 ring-primaryColor-200 md:w-3/5 xl:w-[36rem]">
							<h1 class="heading2">SCADA</h1>
							<!--TODO: need to component this-->
							<div class="flex flex-col gap-6">
								<!---start: iterating content for switch customer-------------------------------------------->
								<div class="flex flex-col gap-4">
									<h3 class="font-bold uppercase text-primaryColor-600">
										sc-johnson
									</h3>
									<div class="flex gap-4 overflow-x-auto">
										<TheButton variant="ghost" label="Comp 1" to="/scada" />
										<TheButton variant="ghost" label="Comp 2" />
										<TheButton variant="ghost" label="Comp 3" />
									</div>
								</div>
								<!---end: iterating content for switch customer-------------------------------------------->
								<div class="flex flex-col gap-4">
									<h3 class="font-bold uppercase text-primaryColor-600">
										test customer [internal test case]
									</h3>
									<div class="flex gap-4 overflow-x-auto">
										<TheButton variant="ghost" label="Comp Name 1" />
										<TheButton variant="ghost" label="Compressor 1" />
										<TheButton variant="ghost" label="Comp 1" />
										<TheButton variant="ghost" label="Comp 2" />
									</div>
								</div>
								<div class="flex flex-col gap-4">
									<h3 class="font-bold uppercase text-primaryColor-600">
										purdue
									</h3>
									<div class="flex gap-4 overflow-x-auto">
										<TheButton variant="ghost" label="C4000" />
										<TheButton variant="ghost" label="C5000" />
										<TheButton variant="ghost" label="Shared" />
									</div>
								</div>
								<div class="flex flex-col gap-4">
									<h3 class="font-bold uppercase text-primaryColor-600">
										sc-johnson
									</h3>
									<div class="flex gap-4 overflow-x-auto">
										<TheButton variant="ghost" label="A" />
										<TheButton variant="ghost" label="B" />
										<TheButton variant="ghost" label="C" />
										<TheButton variant="ghost" label="D" />
									</div>
								</div>
								<div class="flex flex-col gap-4">
									<h3 class="font-bold uppercase text-primaryColor-600">
										sc-johnson
									</h3>
									<div class="flex gap-4 overflow-x-auto">
										<TheButton variant="ghost" label="Comp 1" />
										<TheButton variant="ghost" label="Comp 2" />
										<TheButton variant="ghost" label="Comp 3" />
										<TheButton variant="ghost" label="Comp 4" />
									</div>
								</div>
							</div>
						</div>
						<div
							class="flex w-full rounded-3xl bg-white shadow ring-1 ring-primaryColor-200 md:w-2/5 xl:w-[28rem]">
							<div class="flex flex-col gap-6 p-6">
								<h1 class="heading2">Chat SCADA</h1>
								<div class="flex">
									<TheButton label="New Chat" icon="i-heroicons-plus" />
								</div>
								<div class="flex flex-col gap-4">
									<h2 class="font-semibold text-secondaryColor-600">Old Chats</h2>
									<!---start: iterating content for old chats-------------------------------------------->
									<div class="flex items-center gap-2">
										<UIcon
											name="i-heroicons-chat-bubble-left"
											class="h-[18px] w-[18px] shrink-0" />
										<p class="line-clamp-1 text-black">
											lorme ipsum lorem i psummmm lorme ipsum lorem i psummmm
										</p>
									</div>
									<!---end: iterating content for old chats-------------------------------------------->
									<div class="flex items-center gap-2">
										<UIcon
											name="i-heroicons-chat-bubble-left"
											class="h-[18px] w-[18px] shrink-0" />
										<p class="line-clamp-1 text-black">
											lorme ipsum lorem i psummmm lorme ipsum lorem i psummmm
										</p>
									</div>
									<div class="flex items-center gap-2">
										<UIcon
											name="i-heroicons-chat-bubble-left"
											class="h-[18px] w-[18px] shrink-0" />
										<p class="line-clamp-1 text-black">
											lorme ipsum lorem i psummmm lorme ipsum lorem i psummmm
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						class="flex w-full rounded-3xl bg-primaryColor-50 shadow ring-1 ring-primaryColor-200 md:w-2/5 xl:w-[24rem]">
						<div class="flex w-full flex-col gap-6 p-6">
							<h1 class="heading2">Notifications</h1>
							<div class="flex flex-col gap-4">
								<NotificationData
									notification="Got some interuption in getting data lorme ipsum lorem ipsum loerm"
									time-stamp="2024-04-28 11:54 PM" />
								<NotificationData
									notification="Got some interuption in getting data lorme ipsum lorem ipsum loerm"
									time-stamp="2024-04-28 11:54 PM" />
								<NotificationData
									notification="Got some interuption in getting data lorme ipsum lorem ipsum loerm"
									time-stamp="2024-04-28 11:54 PM" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</ContainerLayout>
</template>

<style scoped lang="postcss"></style>
