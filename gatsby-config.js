module.exports = {
  plugins: [
  	`gatsby-plugin-sass`, 'gatsby-plugin-resolve-src',  {
    	resolve: `gatsby-plugin-nprogress`,
    	options: {
    	  // Setting a color is optional.
    	  color: `tomato`,
    	  // Disable the loading spinner.
    	  showSpinner: false,
    	},
  	}
  ]
}