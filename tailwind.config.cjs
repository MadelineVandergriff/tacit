const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Lato', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				tacit: {
					primary: '#B3569A',
					secondary: '#775563',
					accent: '#218358',
					neutral: '#131019',
					'base-100': '#FAF1EA'
				},
				tacit_dark: {
					primary: '#B3569A',
					secondary: '#775563',
					accent: '#218358',
					neutral: '#FAF1EA',
					'base-100': '#131019'
				}
			}
		]
	}
};
