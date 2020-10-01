module.exports = {
  siteMetadata: {
    title: `My website`,
    description: `Richard delbert's website`,
    author: `Richard Delbert`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#e2f3f5`,
        theme_color: `#3d5af1`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`
  ],
}
