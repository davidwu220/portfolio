module.exports = {
  siteMetadata: {
    title: 'David\'s Site',
    author: "David Wu",
    description: "David's portfolio website."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-react-next`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      }
    },
    {
      resolve: `gatsby-plugin-recaptcha`,
      options: {
         async: true,
         defer: true,
         args: ``,
      },
   }
  ]
}
