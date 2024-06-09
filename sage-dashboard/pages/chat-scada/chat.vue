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
					<ButtonSidebar label="New Chat" icon="i-heroicons-plus" />
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
			<div class="flex h-full w-full flex-col">
				<div class="mx-auto flex h-screen max-w-4xl flex-col">
					<div class="flex flex-1 flex-col gap-6 overflow-y-auto px-6 pb-20 pt-6">
						<!-- start: chatBubble area -->
						<ChatBubble
							displayName="antony"
							query="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
							answer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." />
						<ChatBubble
							displayName="antony"
							query="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
							answer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." />
						<ChatBubble
							displayName="antony"
							query="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
							answer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." />
						<!-- end: chatBubble area -->
					</div>
					<!-- start: chat input -->
					<div class="px-6 pb-6 pt-2">
						<InputChat />
					</div>
					<!-- end: chat input -->
				</div>
			</div>
		</template>
	</BaseLayout>
</template>
