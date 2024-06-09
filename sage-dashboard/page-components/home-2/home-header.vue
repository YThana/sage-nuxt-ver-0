<script setup lang="ts">
</script>

<template>
	<div
		class="flex gap-2 rounded-b-lg md:rounded-t-3xl p-6 shadow items-center">
		<section class="flex-1">
			<NuxtLink to="/">
				<IconLogo class="h-10 w-auto text-black" />
			</NuxtLink>
		</section>

		<section>
			<div class="hidden md:flex">
        <MenuUserProfile
            display-name="Anderson Mark"
            email="andersonMark@gmail.com"
            :notification="13"
            :bg-color="false" />
      </div>
      <div class="flex md:hidden">
        <MenuUserProfile
            display-name="Anderson Mark"
            email="andersonMark@gmail.com"
            :notification="13"
            :bg-color="false"
            sm
        />
      </div>
		</section>
	</div>
</template>

<style scoped></style>
