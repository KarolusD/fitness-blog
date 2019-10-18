const path = require('path')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Fitness Blog`,
    description: `Strona poświęcona diecie i trenigom online. Zawiera blog i artykuły o zdrowym odżywianiu, ćwiczeniach na siłowni i wiele innych.`,
    author: `@KarolusD`,
    leader: `Klaudia Wolińska`,
    url: `https://klaudiawolinska.pl`,
    type: `website`,
    keywords: [
      `dieta`,
      `trening`,
      `Klaudia`,
      `Wolińska`,
      `fitness`,
      `blog`,
      `online`,
      `trener`,
      `personalny`,
      `dietetyk`,
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        assets: path.join(__dirname, 'src/assets'),
        components: path.join(__dirname, 'src/components'),
        pages: path.join(__dirname, 'src/pages'),
        templates: path.join(__dirname, 'src/templates'),
        utils: path.join(__dirname, 'src/utils'),
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /\.js$/,
        exclude: /(node_modules|.cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: '@danbruegge/gatsby-plugin-stylelint',
      options: { files: ['**/*.{js,jsx}'] },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
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
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-prismic-preview',
    //   options: {
    //     repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
    //     linkResolver(doc) {
    //       if (doc.type === 'Blog-post') {
    //         return `/blog/${doc.uid}`
    //       }
    //       return `${doc.type}`
    //     },
    //     path: '/preview',
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**'],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
