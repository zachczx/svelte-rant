import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ["'Space Grotesk Variable'"],
			},
		},
	},

	plugins: [typography],
} as Config;
