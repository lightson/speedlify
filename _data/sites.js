module.exports = {
	netlify: {
		description: "Netlify web sites",
		options: {
			frequency: 60 * 2, // 2 hours
			freshChrome: "site",
		},
		urls: [
			"https://eatcomplete.co",
		]
	},
	ssg: {
		description: "Static Site Generator web sites",
		options: {
			frequency: 60 * 24, // 24 hours
			// if the sites don’t share assets on the same domain, we can reset
			// chrome with each run instead of each site in every run (it’s faster)
			freshChrome: "run"
		},
		urls: [
			//"https://www.11ty.dev/", //

		]
	}
};
