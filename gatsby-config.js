module.exports = {
  siteMetadata: {
    title: `Richard Delbert Tannady | Web Developer`,
    description: `Richard delbert's website for the portfolio of a website developer`,
    author: `Richard Delbert`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `richard-delbert-tannady`,
        short_name: `Richard`,
        start_url: `/`,
        background_color: `#e3e3e3`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`
  ],
}
