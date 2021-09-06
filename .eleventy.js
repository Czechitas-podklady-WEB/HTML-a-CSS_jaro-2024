module.exports = function (eleventyConfig) {
	return {
		dir: {
			input: 'src',
			includes: 'includes',
			data: 'data',
			layouts: 'layouts',
			passthroughFileCopy: true,
			templateFormats: ['html', 'njk', 'md'],
			htmlTemplateEngine: 'njk',
			markdownTemplateEngine: 'njk',
		},
	}
}
