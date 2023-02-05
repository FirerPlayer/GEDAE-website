/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			'light',
			'dark',
			'cupcake',
			'bumblebee',
			{
				emerald: {
					...require('daisyui/src/colors/themes')['[data-theme=emerald]'],
					fontFamily: 'Space Grotesk, sans-serif'
				}
			},
			'corporate',
			'synthwave',
			'retro',
			'cyberpunk',
			'valentine',
			'halloween',
			'garden',
			'forest',
			'aqua',
			'lofi',
			'pastel',
			'fantasy',
			'wireframe',
			'black',
			'luxury',
			'dracula',
			'cmyk',
			'autumn',
			'business',
			'acid',
			'lemonade',
			'night',
			'coffee',
			'winter',
			{
				gedae: {
					primary: '#f9e54a',
					secondary: '#0667e5',
					accent: '#a4ff9e',
					neutral: '#1B191F',
					'base-100': '#EDF1F7',
					info: '#206CEE',
					success: '#3CDDB2',
					warning: '#EECA68',
					error: '#FA383F',
					fontFamily: 'Space Grotesk, sans-serif'
					// '--rounded-box': '0',
					// '--rounded-btn': '0',
					// '--rounded-badge': '0',
					// '--tab-radius': '0'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
