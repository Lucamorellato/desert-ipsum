module.exports = {
  siteMetadata: {
    site: `Desert Ipsum`,
    title: `Desert Ipsum`,
    titleTemplate: ``,
    description: `A desert themed lorem ipsum generator created by Luca Morellato`,
    siteUrl: `https://desertipsum.gatsbyjs.io/`,
    language: `en`,
    twitter: '@LucaMoDev',
    icon: `src/images/favicon.png`,
    image: `src/images/social.png`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-routes`,
      options: {
        path: `${__dirname}/src/routes.ts`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/favicon.png"
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
}
