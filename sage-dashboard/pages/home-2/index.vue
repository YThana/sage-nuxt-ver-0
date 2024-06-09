<script setup lang="ts"></script>

<template>
	<!-- start: container layout ------------------------------------------->
	<ContainerLayout>
		<div class="flex h-full flex-col">

			<!-- start: container layout header ------------------------------------------->
			<header>
				<HomeHeader />
			</header>
			<!-- end: container layout header ------------------------------------------->

			<!-- start: content ------------------------------------------->
			<section class="flex flex-1 flex-col overflow-auto">
				<div class="container mx-auto p-6 lg:max-w-[1024px]">

					<!-- start: welcome text ------------------------------------------->
					<h1 class="heading1">Welcome Anderson!</h1>
					<!-- end: welcome text ------------------------------------------->

					<div class="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
						<div class="flex">
							<DashboardContainer />
						</div>
						<div class="flex">
							<ChatScadaContainer />
						</div>
					</div>

				</div>
			</section>
			<!-- end: content ------------------------------------------->

		</div>
	</ContainerLayout>
	<!-- end: container layout ------------------------------------------->
</template>

<style scoped></style>
