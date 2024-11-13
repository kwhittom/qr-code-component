/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Outfit", "ui-sans-serif", "system-ui"],
			},
			fontSize: {
				sm: "0.8rem",
				base: "15px",
				xl: "1.25rem",
				"2xl": "1.563rem",
				"3xl": "1.953rem",
				"4xl": "2.441rem",
				"5xl": "3.052rem",
			},
			colors: {
				white: "hsl(0, 0%, 100%)",
				slate: {
					300: "hsl(212, 45%, 89%)",
					500: "hsl(216, 15%, 48%)",
					900: "hsl(218, 44%, 22%)",
				},
			},
		},
	},
	plugins: [],
}
