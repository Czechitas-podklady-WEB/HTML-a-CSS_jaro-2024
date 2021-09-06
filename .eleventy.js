module.exports = function (eleventyConfig) {
	return {
		dir: {
			input: 'src',
			templateFormats: ['html', 'njk', 'md'],
			htmlTemplateEngine: 'njk',
			markdownTemplateEngine: 'njk',
		},
	}
}
