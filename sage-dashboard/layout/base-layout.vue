<script setup lang="ts">
// -------------------------------------------------------------------------------------------------
let showSidebar = ref(false);
const sidebar = ref<HTMLDivElement | null>(null);
const sidebarToggle = ref<HTMLButtonElement | null>(null);

const handleSidebar = (e: Event) => {
  if (
      sidebar.value &&
      !sidebar.value.contains(e.target as HTMLDivElement) &&
      !sidebarToggle.value?.contains(e.target as HTMLButtonElement)
  ) {
    showSidebar.value = false;
  }
};

// -------------------------------------------------------------------------------------------------

onMounted(() => {
  document.addEventListener('click', handleSidebar);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleSidebar);
});

// -------------------------------------------------------------------------------------------------
</script>

<template>
  <main class="flex h-screen w-screen">
    <!--start: sidebar toggle-->
    <button
        class="absolute inset-y-1/2 -left-8 z-10 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-primaryColor-500 hover:bg-primaryColor-700 lg:hidden"
        ref="sidebarToggle"
        @click="showSidebar = true">
      <UIcon name="i-heroicons-bars-3" class="h-[32px] w-[32px] text-white"/>
    </button>
    <!--end: sidebar toggle-->

    <!--start: sidebar area-->
    <aside
        class="fixed z-10 h-full w-[252px] shrink-0 -translate-x-full transform bg-primaryColor-100 transition duration-300 ease-in-out lg:relative lg:flex lg:translate-x-0"
        :class="{
				'translate-x-0 shadow lg:shadow-none': showSidebar,
			}"
        ref="sidebar">
      <div class="flex h-full w-full flex-col">
        <div class="flex flex-col gap-[14px] px-6 pt-6">
          <div class="flex flex-col">
            <div class="flex">
              <NuxtLink to="/">
                <IconLogo class="text-black"/>
              </NuxtLink>
            </div>
            <p
                class="flex justify-end text-[10px] font-bold uppercase text-secondaryColor-600">
              version 10.0.2
            </p>
          </div>
          <MenuUserProfile
              display-name="Anderson Mark"
              email="anderson.mark@gmail.com"
              :notification="13"/>
          <div class="mx-auto h-[1px] w-[91px] bg-primaryColor-400"></div>
        </div>

        <div class="flex flex-1 flex-col p-6 overflow-auto">
          <slot name="sidebar-area"></slot>
        </div>
      </div>
    </aside>
    <!--end: sidebar area-->

    <!-- start: main area -->
    <div
        class="h-full w-full overflow-auto"
        :class="{ 'opacity-20 lg:opacity-100': showSidebar }">
      <slot name="main-area"></slot>
    </div>
    <!-- end: main area -->
  </main>
</template>
