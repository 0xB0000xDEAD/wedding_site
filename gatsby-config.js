const path = require('path')

module.exports = {
  pathPrefix: '/wedding_site',
  siteMetadata: {
    title: 'Sergio & Daniela',
    
    subTitle: 'are getting married',
    description: `We're getting married`,
    author: '@gatsbyjs',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
		// {
		// 	resolve: 'gatsby-plugin-google-fonts',
		// 	options: {
		// 		fonts: [
		// 			'Cairo',
		// 			'Roboto'
		// 		]
		// 	}
		// },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        images: path.join(__dirname, 'src/images'),
        utils: path.join(__dirname, 'src/utils'),
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
