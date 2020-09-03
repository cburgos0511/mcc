const path = require('path')

module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`,
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
            resolve: `gatsby-plugin-sass`,
            options: {
                // Override the file regex for SASS
                sassRuleTest: /\.global\.s(a|c)ss$/,
                // Override the file regex for CSS modules
                sassRuleModulesTest: /\.s(a|c)ss$/,
                useResolveUrlLoader: {
                    options: {
                        sourceMap: true,
                    },
                },
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `playfair display\:700,900`,
                    `montserrat\:400,700`, // you can also specify font weights and styles
                ],
                display: 'swap',
            },
        },
        {
            resolve: 'gatsby-plugin-transition-link',
            options: {
                layout: require.resolve(`./src/components/Layout.js`),
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: path.resolve(__dirname, 'src/assets/svg'),
                },
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
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
