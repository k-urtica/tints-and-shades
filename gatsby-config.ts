import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  jsxRuntime: 'automatic',

  siteMetadata: {
    title: `Tints and Shades Generator`,
    description: `This tool generates tints and shades from input colors.`,
    image: `/ogp.png`,
    siteUrl: `https://tintsshades.netlify.app`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: {
    typesOutputPath: `types/__generated__/gatsby-types.d.ts`,
  },

  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-ZZ7F7NPLKH'],
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
}

export default config
