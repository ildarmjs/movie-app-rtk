/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			tablet: '640px',
			// => @media (min-width: 640px) { ... }

			laptop: '1500px',
			// => @media (min-width: 1024px) { ... }

			desktop: '1920px',
			// => @media (min-width: 1280px) { ... }
		},
		extend: {},
	},
	plugins: [],
}
