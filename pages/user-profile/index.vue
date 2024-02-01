<script></script>

<template>
	<BaseLayout>
		<template #navbar-dynamic-area>
			<h1 class="flex w-full text-2xl font-bold uppercase text-black">manage user profile</h1>
		</template>
		<template #main-area>
			<div class="flex md:my-6 md:justify-center">
				<div
					class="flex w-[784px] flex-col p-6 md:flex-row md:rounded-3xl md:border md:border-containerBorder md:bg-white md:shadow-mangeUserProfileMenuContainer">
					<div class="flex flex-col md:pr-6">
						<h1 class="flex text-xl font-bold">Update Profile Name</h1>
						<div class="mt-10 flex flex-col">
							<label for="profileName" class="ml-6 text-[12px] font-bold uppercase">
								Profile Name
							</label>
							<input
								type="text"
								class="mt-2 h-11 w-full rounded-2xl bg-gray pl-6 pr-3 md:w-[350px]"
								placeholder="Enter your profile name" />
						</div>
						<div class="mt-8 flex flex-col">
							<label for="email" class="ml-6 text-[12px] font-bold uppercase">
								Email
							</label>
							<input
								type="email"
								class="mt-2 h-11 w-full rounded-2xl bg-gray pl-6 pr-3 md:w-[350px]"
								placeholder="Enter your email" />
						</div>
						<div class="mt-10 flex md:justify-end">
							<button
								class="h-11 rounded-2xl bg-primary px-10 text-base font-bold text-white">
								Update Profile
							</button>
						</div>
					</div>
					<div class="mt-11 flex flex-col md:mt-0 md:pl-6">
						<h1 class="flex text-xl font-bold">Update Password</h1>
						<div class="mt-10 flex flex-col">
							<label for="oldPassword" class="ml-6 text-[12px] font-bold uppercase">
								Old Password
							</label>
							<input
								type="password"
								class="mt-2 h-11 w-full rounded-2xl bg-gray pl-6 pr-3 md:w-[350px]"
								placeholder="Enter your old passowrd" />
						</div>
						<div class="mt-8 flex flex-col">
							<label for="newPassword" class="ml-6 text-[12px] font-bold uppercase">
								New Password
							</label>
							<input
								type="password"
								class="mt-2 h-11 w-full rounded-2xl bg-gray pl-6 pr-3 md:w-[350px]"
								placeholder="Enter your new passowrd" />
						</div>
						<div class="mt-8 flex flex-col">
							<label
								for="confirmPassword"
								class="ml-6 text-[12px] font-bold uppercase">
								Confirm Password
							</label>
							<input
								type="password"
								class="mt-2 h-11 w-full rounded-2xl bg-gray pl-6 pr-3 md:w-[350px]"
								placeholder="Enter your confirm passowrd" />
						</div>
						<div class="mt-10 flex md:justify-end">
							<button
								class="h-11 rounded-2xl bg-primary px-10 text-base font-bold text-white">
								Update Password
							</button>
						</div>
						<div class="mt-10 flex flex-col space-y-4">
							<h1 class="flex text-[12px] font-bold uppercase">
								Password must contain
							</h1>
							<h2 class="flex items-center text-base">
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="19"
										class="mr-4"
										height="14"
										viewBox="0 0 19 14"
										fill="none">
										<path
											d="M18 1L6.3125 13L1 7.54545"
											stroke="#70CF97"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round" />
									</svg>
								</span>
								at least 8 characters long.
							</h2>
							<h2 class="flex items-center text-base">
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="14"
										class="mr-[19px]"
										height="14"
										viewBox="0 0 14 14"
										fill="none">
										<path
											d="M13 1L1 13M1 1L13 13"
											stroke="#EB5F6E"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round" />
									</svg>
								</span>
								both numeric and alphabetic characters.
							</h2>
						</div>
					</div>
				</div>
			</div>
		</template>
	</BaseLayout>
</template>
