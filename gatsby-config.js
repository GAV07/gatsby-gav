module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Erick Gavin Portfolio`,
        short_name: `Gavin Portfolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#02aab0`,
        display: `standalone`,
        icon: 'src/images/sonic-circle.png',
      },
    },
    // {
    //   resolve: `gatsby-plugin-create-client-paths`,
    //   options: { prefixes: [`/projects/*`] },
    // },
  //   {
  //     resolve: 'gatsby-source-contentful',
  //     options: {
  //       spaceId: 'ioabzosdnj0g',
  //       accessToken: 'djygdbFf-gbzwmeoPgXvNJHD5X_ATuVV3I8Gpzoo7tA'
  //     }
  // }
  ],
};
