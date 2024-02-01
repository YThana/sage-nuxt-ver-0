/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	theme: {
		colors: {
			primary: '#408BFB',
			secondary: '#E3EEFA',
			black: '#111111',
			white: '#ffffff',
			gray: '#F6F7F9',
			green: '#70CF97',
			icon: 'rgba(85, 85, 85, 0.6)',
			containerBorder: 'rgba(199, 199, 199, 0.20)',
			selected: 'rgba(138, 138, 138, 0.25)',
		},
		extend: {
			boxShadow: {
				main: '0px 4px 27px 0px rgba(207, 214, 223, 1)',
				container: '0px 4px 21px 0px rgba(207, 214, 223, 0.25)',
				header: '0px 4px 14px 0px rgba(207, 214, 223, 0.25)',
				userProfileMenu: '0px 4px 14px 4px rgba(217, 217, 217, 0.44)',
				mangeUserProfileMenuContainer: '0px 4px 21px 0px rgba(207, 214, 223, 0.25)',
			},
		},
	},
	plugins: [],
};
