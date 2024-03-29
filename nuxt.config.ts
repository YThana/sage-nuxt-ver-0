// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', 'nuxt-headlessui', '@vueuse/nuxt'],
	components: ['~/components','~/page-layouts']
});
