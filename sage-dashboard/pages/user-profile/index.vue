<template>
  <BaseLayout>
    <template #main-area>
      <div class="flex w-full md:my-6 md:justify-center">
        <div
            class="md:divide-primaryBlue-200 md:border-primaryBlue-200 flex w-full flex-col p-6 md:w-[672px] md:flex-row md:divide-x md:rounded-3xl md:border md:bg-white md:shadow lg:w-[784px]">
          <div class="flex flex-col gap-6 md:w-1/2 md:pr-6">
            <h1 class="heading3">Update Profile Name</h1>
            <div class="flex flex-col">
              <InputText placeholder="Enter your profile name" label="profile name"/>
            </div>
            <div class="flex flex-col">
              <InputText placeholder="Enter your email" label="email"/>
            </div>
            <div class="flex md:justify-end">
              <TheButton label="Update Profile "/>
            </div>
          </div>
          <div class="mt-11 flex flex-col gap-6 md:mt-0 md:w-1/2 md:pl-6">
            <h1 class="heading3 flex">Update Password</h1>
            <div class="flex flex-col">
              <InputPassword
                  placeholder="Enter your old password"
                  label="old password"/>
            </div>
            <div class="flex flex-col">
              <InputPassword
                  placeholder="Enter your new password"
                  label="new password"/>
            </div>
            <div class="flex flex-col">
              <InputPassword
                  placeholder="Enter your confirm password"
                  label="confirm password"/>
            </div>
            <div class="flex md:justify-end">
              <TheButton label="Update Password"/>
            </div>
            <!-- password rules  -->
            <div class="flex flex-col gap-4 text-black">
              <h1 class="flex text-[12px] font-bold uppercase">
                Password must contain
              </h1>
              <div class="flex items-center text-base">
                <UIcon
                    name="i-heroicons-check"
                    class="mr-1 h-[20px] w-[20px] text-green-500"/>
                at least 8 characters long.
              </div>
              <div class="flex items-center text-base">
                <UIcon
                    name="i-heroicons-x-mark"
                    class="mr-1 h-[20px] w-[20px] text-red-500"/>
                both numeric and alphabetic characters.
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #sidebar-area>
      <div class="flex flex-col gap-6">
        <ButtonSidebar label="Customers" icon="i-heroicons-arrow-right" to="/dashboard"/>
      </div>
    </template>
  </BaseLayout>
</template>
