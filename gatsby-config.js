const theme = require('./src/themes/theme');

module.exports = {
  trailingSlash: "always",
  siteMetadata: {
    title: "My Starter Blog",
    description: "A simple blog built with Gatsby and MDX",
    url: "https://url.url",
    image: "/laptop.jpeg",
    author: "Author",
  },
  plugins: [
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/articles`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      },
    },
    // TODO: Set cookies IDs
    {
        resolve: `gatsby-plugin-gdpr-cookies`,
        options: {
            googleAnalytics: {
                trackingId: '', // leave empty if you want to disable the tracker
                cookieName: 'gatsby-gdpr-google-analytics', // default
                anonymize: true, // default
                allowAdFeatures: false // default
            },
            googleTagManager: {
                trackingId: '', // leave empty if you want to disable the tracker
                cookieName: 'gatsby-gdpr-google-tagmanager', // default
                dataLayerName: 'dataLayer', // default
            },
            facebookPixel: {
                pixelId: '', // leave empty if you want to disable the tracker
                cookieName: 'gatsby-gdpr-facebook-pixel', // default
            },
            tikTokPixel: {
                pixelId: '', // leave empty if you want to disable the tracker
                cookieName: 'gatsby-gdpr-tiktok-pixel', // default
            },
            // defines the environments where the tracking should be available  - default is ["production"]
            environments: ['production', 'development'],
        },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        // useAutoGen: required 'true' to use autogen
        useAutoGen: true,
        // autoGenHomeLabel: optional 'Home' is default
        autoGenHomeLabel: `Home`,
        // exclude: optional, include this array to exclude paths you don't want to
        // generate breadcrumbs for (see below for details).
        exclude: [
          `**/dev-404-page/**`,
          `**/404/**`,
          `**/404.html`,
          `**/offline-plugin-app-shell-fallback/**`
        ],
        // isMatchOptions: optional, include this object to configure the wildcard-match library.
        excludeOptions: {
          separator: '.'
        },
        // crumbLabelUpdates: optional, update specific crumbLabels in the path
        /*crumbLabelUpdates: [
          {
            pathname: '/book',
            crumbLabel: 'Books'
          }
        ],*/
        // trailingSlashes: optional, will add trailing slashes to the end
        // of crumb pathnames. default is false
        trailingSlashes: true,
        // usePathPrefix: optional, if you are using pathPrefix above
        // usePathPrefix: '/blog',
      },
    },
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        includePaths: [{ regex: "^\/.+\/.+" }], // TODO: Include manual paths
        height: 5,
        prependToBody: false,
        color: `${theme.colors.main1}`,
        footerHeight: 500,
        headerHeight: 0,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/
        }
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`, 
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false,
              maintainCase: false,
              removeAccents: true,
              isIconAfterHeader: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-smoothscroll`,
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            plugins: [
                `gatsby-remark-autolink-headers`,
            ],
        },
    },
    `gatsby-plugin-preload-fonts`,
    // {
    //   resolve: `gatsby-plugin-webfonts`,
    //   options: {
    //     fonts: {
    //       google: [
    //         // {
    //         //   family: "Roboto Mono",
    //         //   variants: [`400`, `400i`, `700`, `700i`],
    //         // },
    //         {
    //           family: "Muli",
    //           variants: [`400`, `400i`, `700`, `700i`],
    //         },
    //       ]
    //       // {
    //       //   family: `Roboto Mono`,
    //       // },
    //       // {
    //       //   family: `Muli`,
    //       //   variants: [`400`, `400i`, `700`, `700i`]
    //       // },
    //     },
    //   },
    // },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-material-ui`,
  ]
}
