const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans]
			}
		},
		colors: {
			teal: {
				100: "#ceebde",
				200: "#9ed6be",
				300: "#6dc29d",
				400: "#3dad7d",
				500: "#0c995c",
				600: "#0a7a4a",
				700: "#075c37",
				800: "#053d25",
				900: "#021f12"
			},
			pink: {
		100: "#f3daec",
		200: "#e7b6d9",
		300: "#da91c7",
		400: "#ce6db4",
		500: "#c248a1",
		600: "#9b3a81",
		700: "#742b61",
		800: "#4e1d40",
		900: "#270e20"
},
black: {
    100: "#d2d1d4",
    200: "#a5a3a8",
    300: "#77757d",
    400: "#4a4751",
    500: "#1d1926",
    600: "#17141e",
    700: "#110f17",
    800: "#0c0a0f",
    900: "#060508"
},
white: {
    100: "#fefaf6",
    200: "#fdf5ee",
    300: "#fcefe5",
    400: "#fbeadd",
    500: "#fae5d4",
    600: "#c8b7aa",
    700: "#96897f",
    800: "#645c55",
    900: "#322e2a"
},
indigo: {
    100: "#e1dadd",
    200: "#c3b4ba",
    300: "#a58f98",
    400: "#876975",
    500: "#694453",
    600: "#543642",
    700: "#3f2932",
    800: "#2a1b21",
    900: "#150e11"
},
		}
	},
	plugins: []
};
