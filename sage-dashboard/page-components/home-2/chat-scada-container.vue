<script setup lang="ts">
const customers = [
	'sc-johnson',
	'Test customer [internal test case]',
	'purdue',
	'seaboard',
	'vision',
];
</script>

<template>
	<!-- start: container ------------------------------------------->
	<div class="w-full rounded-3xl p-6 shadow ring-1 ring-primaryColor-200">

		<!-- start: header ------------------------------------------->
		<header>
			<div class="flex items-center gap-2">
				<div class="flex flex-1 items-center gap-4">
					<IconChat class="text-primaryColor-600" />
					<h2 class="heading2">Chat-Scada</h2>
				</div>
				<UIcon
					name="i-heroicons-cog-8-tooth"
					class="h-[24px] w-[24px] text-primaryColor-600" />
			</div>
		</header>
		<!-- end: header ------------------------------------------->

		<section>
			<div class="mt-6 flex flex-col gap-8">
				<!-- start: select customer ------------------------------------------->
				<section>
					<div class="flex w-full justify-end">
						<div class="w-[250px]">
							<SelectCustomer :customers />
						</div>
					</div>
				</section>
				<!-- end: select customer ------------------------------------------->

				<!-- start: start chat area ------------------------------------------->
				<section>
					<div class="flex flex-col gap-6">

						<section>
							<!-- start: chat bubble ------------------------------------------->
							<div class="flex flex-row gap-4">
								<div
									class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-primaryColor-500 ring-2 ring-secondaryColor-100">
									<UIcon
										name="i-heroicons-square-3-stack-3d"
										class="h-[18px] w-[18px] text-primaryColor-50" />
								</div>
								<div class="rounded-b-3xl rounded-tr-3xl bg-secondaryColor-50 p-4">
									<p class="text-black">Hey! You can start your chat here</p>
								</div>
							</div>
							<!-- end: chat bubble ------------------------------------------->
						</section>

						<section>
							<!-- start: chat input ------------------------------------------->
							<InputChat />
							<!-- end: chat input ------------------------------------------->
						</section>

					</div>
				</section>
				<!-- end: start chat area ------------------------------------------->

				<!-- start: recent chats ------------------------------------------->
				<section>
					<div>
						<h4 class="font-bold uppercase text-primaryColor-600">recent chats</h4>

						<section class="mt-2">
              <!-- start: recent chats container ------------------------------------------->
							<div class="flex flex-col">

								<!-- start: recent chat item ------------------------------------------->
								<div
									class="group flex items-center gap-4 rounded-lg p-2 hover:bg-secondaryColor-50">
									<UIcon
										class="h-[18px] w-[18px] text-primaryColor-500 group-hover:text-primaryColor-600"
										name="i-heroicons-chat-bubble-left" />

									<section class="flex flex-col gap-[3px]">
										<p
											class="line-clamp-1 text-black group-hover:text-primaryColor-600">
											lorme ipsum lorem i psummmm lorme ipsum lorem i psummmm
										</p>

										<p class="text-xs font-medium text-secondaryColor-500">
											2024-04-28 11:54 PM
										</p>
									</section>
								</div>
								<!-- end: recent chat item ------------------------------------------->

								<!-- start: duplicate chat items ------------------------------------------->
								<div
									class="group flex items-center gap-4 rounded-lg p-2 hover:bg-secondaryColor-50">
									<UIcon
										class="h-[18px] w-[18px] text-primaryColor-500 group-hover:text-primaryColor-600"
										name="i-heroicons-chat-bubble-left" />

									<section class="flex flex-col gap-[3px]">
										<p
											class="line-clamp-1 text-black group-hover:text-primaryColor-600">
											lorme ipsum lorem i psummmm lorme ipsum lorem ipsum
										</p>

										<p class="text-xs font-medium text-secondaryColor-500">
											2024-04-28 11:54 PM
										</p>
									</section>
								</div>

								<div
									class="group flex items-center gap-4 rounded-lg p-2 hover:bg-secondaryColor-50">
									<UIcon
										class="h-[18px] w-[18px] text-primaryColor-500 group-hover:text-primaryColor-600"
										name="i-heroicons-chat-bubble-left" />

									<section class="flex flex-col gap-[3px]">
										<p
											class="line-clamp-1 text-black group-hover:text-primaryColor-600">
											lorme ipsum lorem i psummmm lorme ipsum lorem i
										</p>

										<p class="text-xs font-medium text-secondaryColor-500">
											2024-04-28 11:54 PM
										</p>
									</section>
								</div>
								<!-- end: duplicate chat items ------------------------------------------->

							</div>
						</section>
            <!-- end: recent chats container ------------------------------------------->

          </div>
				</section>
				<!-- end: recent chats ------------------------------------------->

			</div>
		</section>
	</div>
	<!-- end: container ------------------------------------------->
</template>

<style scoped></style>
