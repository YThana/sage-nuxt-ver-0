export default defineAppConfig({
	ui: {
		primary: 'primaryColor',
		gray: 'cool',
		colors: ['primaryColor', 'secondaryBlue', 'white', 'secondaryColor'],

		button: {
			base: 'transition-all duration-200 ease-in-out outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0',
			font: 'font-normal',
			size: {
				default: 'text-base rounded-2xl h-10',
				link: 'text-base',
				sm: 'text-sm h-7 rounded-[10px]',
			},
			padding: {
				default: 'px-4',
				link: 'px-0',
				sm: 'px-[10px]',
			},
			gap: {
				default: 'gap-x-2',
				sm: 'gap-x-2',
			},
			icon: {
				base: 'w-[18px] h-[18px] flex-shrink-0',
			},
			square: {
				default: 'rounded-xl px-2.5',
				sm: 'rounded-xl px-2',
			},
			color: {
				'secondary': {
					solid: 'shadow-none bg-secondaryColor-100 hover:bg-secondaryColor-200 text-black',
					// ghost: 'bg-transparent text-black hover:bg-secondaryColor-100 shadow-none rounded-2xl',
				},
				'ghost': {
					solid: 'text-black hover:text-white bg-primaryColor-50 hover:bg-primaryColor-500 ring-0 shadow-none',
					ghost: 'bg-transparent text-black hover:bg-primaryColor-200 ring-0 shadow-none',
				},
				'dark': {
					solid: 'shadow-none bg-secondaryColor-950 hover:bg-secondaryColor-800 text-white',
					// ghost: 'bg-transparent text-black hover:text-white hover:bg-secondaryColor-950 shadow-none rounded-2xl',
				},
				'primary': {
					solid: 'text-primaryColor-50 bg-primaryColor-500 hover:bg-primaryColor-600 shadow-none',
					// ghost: 'bg-transparent text-black hover:text-white hover:bg-primaryColor-500 shadow-none rounded-2xl',
				},
				'primary-light': {
					solid: 'text-black bg-primaryColor-200 hover:bg-primaryColor-300 shadow-none',
				},
			},
		},
		dropdown: {
			rounded: 'rounded-2xl',
			container: 'z-50 group',
			padding: 'p-2',
			item: {
				base: 'w-full gap-2 h-10',
				padding: 'px-4',
				rounded: 'rounded-[12px]',
				size: 'text-base',
				inactive: 'text-black',
				icon: {
					base: 'w-[18px] h-[18px] flex-shrink-0',
					active: 'text-primaryColor-600',
					inactive: 'text-primaryColor-600',
				},
			},
		},
		chip: {
			position: {
				'top-right': 'top-[10px] right-[7px]',
			},
			size: {
				'2xl': 'h-4 font-bold text-xs',
			},
		},
		input: {
			wrapper: 'relative flex items-center',
			base: 'focus:outline-none relative border-1 border-primaryColor-200 w-full transition-all duration-200 ease-in-out',
			rounded: 'rounded-2xl',
			placeholder: 'placeholder-secondaryColor-300',
			size: {
				default: 'text-base h-10',
				sm: 'text-base h-8',
				lg: 'h-14 text-base',
			},
			color: {
				primary: {
					outline:
						'shadow-none bg-primaryColor-50 text-black focus:ring-2 focus:ring-primaryColor-500 ',
				},
			},
			padding: {
				default: 'px-4',
				lg: 'px-4',
			},
			leading: {
				padding: {
					default: 'ps-10',
					lg: 'ps-10',
				},
			},
			trailing: {
				padding: {
					default: 'pe-10',
					lg: 'pe-12',
				},
			},
			icon: {
				color: 'text-primaryColor-500',
				size: {
					default: 'h-[18px] w-[18px]',
					// sm: 'h-[18px] w-[18px] ',
				},
				leading: {
					padding: {
						default: 'px-4',
					},
				},
				trailing: {
					padding: {
						default: 'pe-2',
						lg: 'pe-2',
					},
					pointer: '',
				},
			},
		},
		formGroup: {
			container: 'mt-2 static',
			label: {
				base: 'block font-bold text-sm uppercase text-black ml-6',
			},
			error: 'ml-6',
		},
		padding: {
			default: 'px-4',
		},
		checkbox: {
			wrapper: 'flex items-center',
			base: 'h-6 w-6 transition-all duration-200 ease-in-out',
			rounded: 'rounded-xs',
			border: 'border-primaryColor-200',
			label: 'text-base',
			background: 'bg-primaryColor-50',
		},
		radio: {
			wrapper: 'flex items-center',
			base: 'h-6 w-6 transition-all duration-200 ease-in-out',
			label: 'text-base',
			background: 'bg-primaryColor-50',
			border: 'border-primaryColor-200',
		},
		modal: {
			rounded: 'rounded-2xl',
			shadow: 'shadow',
			ring: 'ring-1 ring-primaryColor-200',
		},
	},
});
