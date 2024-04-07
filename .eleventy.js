const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('src/static')

	eleventyConfig.addPlugin(syntaxHighlight)

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
		pathPrefix: '/HTML-a-CSS_jaro-2024/',
	}
}
