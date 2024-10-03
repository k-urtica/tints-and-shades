// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  devtools: { enabled: true },

  components: [
    {
      path: '@/components',
      pathPrefix: false,
    },
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        prefix: 'og: http://ogp.me/ns#',
      },
      title: 'Tints and Shades Generator',
      titleTemplate: '%s | ' + 'Tints and Shades Generator',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Generate tints and shades from any color code interactively. A simple tool to create stunning color variations with ease.',
        },
        // OGP
        {
          key: 'og:url',
          property: 'og:url',
          content: 'https://tintsshades.netlify.app',
        },
        { key: 'og:type', property: 'og:type', content: 'website' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico',
          sizes: '48x48',
        },
        {
          rel: 'icon',
          href: '/favicon.svg',
          sizes: 'any',
          type: 'image/svg+xml',
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon-180x180.png',
        },
      ],
    },
  },

  css: ['@/assets/main.css'],

  modules: [
    '@vueuse/nuxt',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@nuxtjs/sitemap',
  ],

  site: {
    url: 'https://tintsshades.netlify.app',
  },

  ui: {
    global: false,
  },

  icon: {
    provider: 'iconify',
    serverBundle: false,
  },

  tailwindcss: {
    viewer: false,
  },

  eslint: {
    config: {
      stylistic: false,
    },
  },

  sitemap: {
    autoLastmod: false,
    discoverImages: false,
    sitemaps: false,
  },

  $production: {
    scripts: {
      registry: {
        googleAnalytics: {
          id: 'G-ZZ7F7NPLKH',
        },
      },
    },
  },

  future: {
    compatibilityVersion: 4,
  },
});
