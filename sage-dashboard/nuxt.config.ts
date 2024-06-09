// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxt/ui', '@vueuse/nuxt'],
	colorMode: {
		preference: 'light',
	},
	components: [
		{ path: '~/components', pathPrefix: false },
		{ path: '~/layout', pathPrefix: false },
		{ path: '~/page-components', pathPrefix: false },
	],
	nitro: {
		preset: 'aws-amplify',
	},
});
