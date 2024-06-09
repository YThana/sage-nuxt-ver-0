<script setup lang="ts">
</script>

<template>
	<!-- start: container ------------------------------------------->
	<div class="w-full rounded-3xl p-6 shadow ring-1 ring-primaryColor-200">

		<!-- start: header ------------------------------------------->
		<header>
			<div class="flex items-center gap-2">
				<div class="flex flex-1 items-center gap-4">
					<IconUsers class="text-primaryColor-600" />
					<h2 class="heading2">Dashboard</h2>
				</div>

				<MenuDsahboardCustomers />
			</div>
		</header>
		<!-- end: header ------------------------------------------->

		<!-- start: customers and devices section ------------------------------------------->
		<section class="mt-6">

			<!-- start: data container ------------------------------------------->
			<div class="flex flex-col gap-6">

				<!-- start: customer and devices data ------------------------------------------->
				<div class="flex flex-col gap-4">
					<h4 class="font-bold uppercase text-primaryColor-600">sc-johnson</h4>

					<div class="grid grid-cols-3 gap-4 sm:grid-cols-4">
						<TheButton variant="ghost" label="Comp 1" block truncate />
						<TheButton variant="ghost" label="Comp 2" block truncate />
						<TheButton variant="ghost" label="Comp 3" block truncate />
						<TheButton variant="ghost" label="Comp 4" block truncate />
					</div>
				</div>
				<!-- end: customer and devices data ------------------------------------------->

        <!-- start: duplicate data ------------------------------------------->
        <div class="flex flex-col gap-4">
          <h4 class="font-bold uppercase text-primaryColor-600">test customer [internal test case]</h4>

          <div class="grid grid-cols-3 gap-4 sm:grid-cols-4">
            <TheButton variant="ghost" label="Comp A" block truncate />
            <TheButton variant="ghost" label="Two" block truncate />
            <TheButton variant="ghost" label="Three" block truncate />
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h4 class="font-bold uppercase text-primaryColor-600">purdue</h4>

          <div class="grid grid-cols-3 gap-4 sm:grid-cols-4">
            <TheButton variant="ghost" label="C 4000" block truncate />
            <TheButton variant="ghost" label="C 5000" block truncate />
            <TheButton variant="ghost" label="Shared" block truncate />
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h4 class="font-bold uppercase text-primaryColor-600">seaboard</h4>

          <div class="grid grid-cols-3 gap-4 sm:grid-cols-4">
            <TheButton variant="ghost" label="A" block truncate />
            <TheButton variant="ghost" label="B" block truncate />
            <TheButton variant="ghost" label="C" block truncate />
            <TheButton variant="ghost" label="D" block truncate />
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h4 class="font-bold uppercase text-primaryColor-600">vision</h4>

          <div class="grid grid-cols-3 gap-4 sm:grid-cols-4">
            <TheButton variant="ghost" label="Stage 1" block truncate />
            <TheButton variant="ghost" label="Stage 2" block truncate />
            <TheButton variant="ghost" label="Stage 3" block truncate />
            <TheButton variant="ghost" label="Turbine" block truncate />
            <TheButton variant="ghost" label="Air Compressor" block truncate />
          </div>
        </div>
        <!-- end: duplicate data ------------------------------------------->

			</div>
			<!-- end: data container ------------------------------------------->

		</section>
		<!-- end: customers and devices section ------------------------------------------->

	</div>
	<!-- end: container ------------------------------------------->
</template>

<style scoped></style>
