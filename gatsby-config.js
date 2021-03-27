module.exports = {
  siteMetadata: {
    site: `Desert Ipsum`,
    title: `Desert Ipsum`,
    titleTemplate: ``,
    description: `A desert themed lorem ipsum generator 🏜`,
    siteUrl: `https://gatsby-starter-gnonce.netlify.com/`,
    language: `en`,
    twitter: '@LucaMoDev',
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
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
}
