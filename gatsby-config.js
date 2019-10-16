module.exports = {
  siteMetadata: {
    title: `Christopher Scharun`,
    description: `Make the difference`,
    author: `@08en`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Christopher Scharun`,
        short_name: `Scharun`,
        start_url: `/`,
        background_color: `#032539`,
        theme_color: `#032539`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}
