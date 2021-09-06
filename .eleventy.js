module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('src/static')

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
