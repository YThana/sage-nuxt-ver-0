<script setup lang="ts"></script>

<template>
	<BaseLayout>
		<template #sidebar-area>
			<div class="flex flex-col gap-6">
				<div class="flex flex-col gap-2">
					<ButtonSidebar
						label="Dashboard"
						icon="i-heroicons-square-3-stack-3d"
						to="/scada">
					</ButtonSidebar>
					<ButtonSidebar label="New Chat" icon="i-heroicons-plus" to="/chat-scada/chat" />
				</div>
				<div class="flex flex-col gap-2">
					<p class="flex text-[12px] font-bold uppercase text-secondaryColor-600">
						recents
					</p>
					<ButtonSidebar
						label="Lorem ipsum dolor sit amet consectetur"
						icon="i-heroicons-chat-bubble-bottom-center" />
					<ButtonSidebar
						label="Lorem ipsum dolor sit amet consectetur"
						icon="i-heroicons-chat-bubble-bottom-center" />
					<ButtonSidebar
						label="Lorem ipsum dolor sit amet consectetur"
						icon="i-heroicons-chat-bubble-bottom-center" />
				</div>
			</div>
		</template>
		<template #main-area>
			<div class="mx-auto flex h-full w-full max-w-4xl flex-col">
				<div class="flex flex-1 flex-col gap-10 overflow-auto p-6">
					<h1 class="heading1">Hello Anderson!</h1>
					<div class="grid w-full grid-cols-2 gap-6 sm:grid-cols-3">
						<!---start: chat template-------------------------------------------->
						<div
							class="flex flex-col gap-4 rounded-2xl bg-primaryColor-50 p-4 shadow ring-1 ring-primaryColor-200">
							<h2 class="text-2xl font-semibold text-primaryColor-600">
								Lorem Ipsum Lorem
							</h2>
							<p class="text-primaryColor-500">
								It is a long established fact that a reader will be distracted by
								the readable content of a
							</p>
							<div class="flex justify-end">
								<UButton
									size="default"
									color="ghost"
									variant="ghost"
									square
									type="ghost">
									<UIcon
										name="i-heroicons-arrow-long-right"
										class="h-[24px] w-[24px] text-primaryColor-700" />
								</UButton>
							</div>
						</div>
						<!---end: chat template-------------------------------------------->

						<div
							class="flex flex-col gap-4 rounded-2xl bg-primaryColor-50 p-4 shadow ring-1 ring-primaryColor-200">
							<h2 class="text-2xl font-semibold text-primaryColor-600">
								Lorem Ipsum Lorem
							</h2>
							<p class="text-primaryColor-500">
								It is a long established fact that a reader will be distracted by
								the readable content of a
							</p>
							<div class="flex justify-end">
								<UButton
									size="default"
									color="ghost"
									variant="ghost"
									square
									type="ghost">
									<UIcon
										name="i-heroicons-arrow-long-right"
										class="h-[24px] w-[24px] text-primaryColor-700" />
								</UButton>
							</div>
						</div>
						<div
							class="flex flex-col gap-4 rounded-2xl bg-primaryColor-50 p-4 shadow ring-1 ring-primaryColor-200">
							<h2 class="text-2xl font-semibold text-primaryColor-600">
								Lorem Ipsum Lorem
							</h2>
							<p class="text-primaryColor-500">
								It is a long established fact that a reader will be distracted by
								the readable content of a
							</p>
							<div class="flex justify-end">
								<UButton
									size="default"
									color="ghost"
									variant="ghost"
									square
									type="ghost">
									<UIcon
										name="i-heroicons-arrow-long-right"
										class="h-[24px] w-[24px] text-primaryColor-700" />
								</UButton>
							</div>
						</div>
					</div>
					<div
						class="flex w-full items-center gap-4 rounded-2xl bg-secondaryColor-50 p-4 text-secondaryColor-500 shadow-secondary ring-1 ring-secondaryColor-100">
						<UIcon
							name="i-heroicons-exclamation-circle"
							class="h-[24px] w-[24px] shrink-0 text-secondaryColor-700" />
						<p>
							It is a long established fact that a reader will be distracted by the
							readable content of a pagt is a long established fact that a reader will
							be distracted by the readable content of a
						</p>
					</div>
				</div>
				<div class="w-full px-6 pb-6 pt-2">
					<InputChat />
				</div>
			</div>
		</template>
	</BaseLayout>
</template>

<style scoped></style>
