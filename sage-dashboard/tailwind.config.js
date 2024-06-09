/** @type {import('tailwindcss').Config} */
export default {
	content: [],

	theme: {
		fontFamily: {
			sans: ['Inter Tight'],
			code: ['CodeNewRoman', 'monospace'],
		},

		extend: {
			fontSize: {
				sm: '12px',
				xs: '10px',
			},
			borderRadius: {
				small: '12px',
				xs: '6px',
			},
			colors: {
				primaryColor: {
					50: '#F8F9FF',
					100: '#EDEFFF',
					200: '#DEE2FF',
					300: '#B2B5EF',
					400: '#9EA2FC',
					500: '#7774FF', // 500 is the original color
					600: '#6A5BF9',
					700: '#5B3DEE',
					800: '#4F2FD3',
					900: '#4029AA',
					950: '#372986',
				},
				secondaryColor: {
					50: '#F3F7F8',
					100: '#E0E9ED',
					200: '#C5D4DC',
					300: '#9DB7C3',
					400: '#6E90A2',
					500: '#527488', // 500 is the original color
					600: '#476073',
					700: '#3E5260',
					800: '#394651',
					900: '#333D46',
					950: '#232C35',
				},

				black: '#232C35',
				white: '#ffffff',
			},
			boxShadow: {
				DEFAULT: '0px 4px 14px 0px rgba(119, 116, 255, 0.25)',
				secondary: '0px 4px 14px 0px rgba(138, 138, 138, 0.25)',
			},
		},
	},
	plugins: [],
};
