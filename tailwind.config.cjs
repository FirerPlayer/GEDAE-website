/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				'jedi-light': {
					primary: '#0105bf',
					secondary: '#ebf22e',
					accent: '#1a8b91',
					neutral: '#251B28',
					'base-100': '#EFEFF1',
					info: '#2751DD',
					success: '#28C883',
					warning: '#F6C123',
					error: '#ff0000',
					'--rounded-box': '0', // border radius rounded-box utility class, used in card and other large boxes
					'--rounded-btn': '0' // border radius rounded-btn utility class, used in buttons and similar element
				}
			},
			{
				'jedi-dark': {
					primary: '#89aed3',
					secondary: '#c23cea',
					accent: '#3cacd8',
					neutral: '#211C22',
					'base-100': '#414045',
					info: '#7CD7EE',
					success: '#166048',
					warning: '#98790B',
					error: '#F14522',
					'--rounded-box': '0', // border radius rounded-box utility class, used in card and other large boxes
					'--rounded-btn': '0' // border radius rounded-btn utility class, used in buttons and similar element
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
