const config = {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
  ],

	theme: {
		extend: {
			backgroundImage: {
				"bird": "url('bird.jpeg')",
				"horse": "url('horse.jpeg')",
			}
		},
	},

	plugins: []

};

module.exports = config;
