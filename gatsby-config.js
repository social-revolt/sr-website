module.exports = {
  plugins: [
  	`gatsby-plugin-sass`,`gatsby-plugin-react-helmet`, 'gatsby-plugin-resolve-src',  {
    	resolve: `gatsby-plugin-nprogress`,
    	options: {
    	  // Setting a color is optional.
    	  color: `tomato`,
    	  // Disable the loading spinner.
    	  showSpinner: false,
    	},
  	}, {
    resolve: `gatsby-plugin-google-tagmanager`,
    options: {
      id: "GTM-KGSQZFL",
      // Include GTM in development.
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false,
    },
  },
  ]
}