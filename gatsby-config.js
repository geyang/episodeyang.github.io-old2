module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Ge Yang`,
    description: `Research Blog`,
    author: `@episodeyang`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/src/pages`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `blog`,
    //     path: `${__dirname}/src/pages/blog`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                {
                  resolve: `gatsby-remark-katex`,
                  options: {
                    // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
                    strict: `ignore`,
                  },
                },
              ],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    //
    // -----------------------------------------------
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // -----------------------------------------------
    //
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     commonmark: true,
    //     footnotes: true,
    //     pedantic: true,
    //     gfm: true,
    //     plugins: [],
    //   },
    // },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       {
    //         resolve: `gatsby-remark-katex`,
    //         options: {
    //           // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
    //           strict: `ignore`,
    //         },
    //       },
    //     ],
    //   },
    // },
  ],
}
