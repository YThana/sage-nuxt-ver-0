<script setup lang="ts">
</script>

<template>
  <BaseLayout>
    <template #sidebar-area>
      <div class="flex h-full flex-col gap-6">
        <div class="flex grow flex-col gap-2">
          <ButtonSidebar label="Home" icon="i-heroicons-home"/>
          <ButtonSidebar label="Customers" icon="i-heroicons-user-group" active/>
          <ButtonSidebar label="MQTT Console" icon="i-heroicons-command-line"/>
        </div>

        <div class="flex">
          <ButtonSidebar label="Manage Users" icon="i-heroicons-user-group" class="w-full"/>
        </div>
      </div>
    </template>
    <template #main-area>
      <div class="p-6">
        <div
            class="mx-auto max-w-[840px] rounded-3xl p-6 shadow ring-1 ring-primaryColor-200">
          <header class="flex flex-col gap-2 sm:flex-row sm:justify-between">
            <h1 class="heading2">All Customers</h1>
            <div class="flex items-center gap-4">
              <InputSearch/>
              <TheButton icon="i-heroicons-plus" label="Customer"/>
            </div>
          </header>

          <section>
            <!---start: table header-------------------------------------------->
            <div
                class="pb-[5px mt-6 flex gap-2 border-b border-secondaryColor-100 font-bold text-secondaryColor-600">
              <h3 class="w-[100px] sm:w-[200px]">Customer</h3>
              <h3 class="flex-1">Compressors</h3>
            </div>
            <!---end: table header-------------------------------------------->

            <!---start:table body-------------------------------------------->
            <div class="flex flex-col divide-y divide-secondaryColor-100">
              <!---start: table data-------------------------------------------->
              <div class="flex gap-2 py-2">
                <div class="flex w-[100px] items-center sm:w-[200px]">
                  <UButton variant="link" size="link" label="Seaboard" truncate/>
                </div>
                <div class="flex flex-1 flex-wrap gap-4">
                  <TheButton label="A" variant="primary-light"/>
                  <TheButton label="B" variant="primary-light"/>
                  <TheButton label="C" variant="primary-light"/>
                  <TheButton label="D" variant="primary-light"/>
                  <TheButton label="Shared" variant="primary-light"/>
                </div>
              </div>
              <!---end: table data-------------------------------------------->

              <!---start: duplicate data-------------------------------------------->
              <div class="flex gap-2 py-2">
                <div class="flex w-[100px] items-center sm:w-[200px]">
                  <UButton variant="link" size="link" label="Purdue" truncate/>
                </div>
                <div class="flex flex-1 flex-wrap gap-4">
                  <TheButton label="C4000" variant="primary-light"/>
                  <TheButton label="C5000" variant="primary-light"/>
                  <TheButton label="Shared" variant="primary-light"/>
                </div>
              </div>
              <div class="flex gap-2 py-2">
                <div class="flex w-[100px] items-center sm:w-[200px]">
                  <UButton
                      variant="link"
                      size="link"
                      label="SC-Johnson"
                      truncate/>
                </div>
                <div class="flex flex-1 flex-wrap gap-4">
                  <TheButton label="Cogen1" variant="primary-light"/>
                  <TheButton label="Cogen2" variant="primary-light"/>
                </div>
              </div>
              <div class="flex gap-2 py-2">
                <div class="flex w-[100px] items-center sm:w-[200px]">
                  <UButton variant="link" size="link" label="Vision" truncate/>
                </div>
                <div class="flex flex-1 flex-wrap gap-4">
                  <TheButton label="Stage 1" variant="primary-light"/>
                  <TheButton label="Stage 2" variant="primary-light"/>
                  <TheButton label="Turbine" variant="primary-light"/>
                  <TheButton label="Air Compressor" variant="primary-light"/>
                  <TheButton label="Shared" variant="primary-light"/>
                </div>
              </div>
              <div class="flex gap-2 py-2">
                <div class="flex w-[100px] items-center sm:w-[200px]">
                  <UButton
                      variant="link"
                      size="link"
                      label="Test Customer"
                      truncate/>
                </div>
                <div class="flex flex-1 flex-wrap gap-4">
                  <TheButton label="Comp A" variant="primary-light"/>
                  <TheButton label="Two" variant="primary-light"/>
                  <TheButton label="Three" variant="primary-light"/>
                </div>
              </div>
              <!---end: duplicate data-------------------------------------------->
            </div>
            <!---end: table body-------------------------------------------->
          </section>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>

<style scoped></style>
