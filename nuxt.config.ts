// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/sitemap',
    '@vueuse/nuxt',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxt/scripts',
    'nuxt-og-image',
    '@nuxtjs/google-fonts',
  ],

  $production: {
    scripts: {
      registry: {
        googleAnalytics: {
          id: 'G-FS97XXKP7P',
        },
        googleAdsense: {
          client: 'ca-pub-6155745382628091',
          autoAds: true,
          scriptInput: {
            defer: true,
          },
        },
      },
    },
  },

  components: [
    {
      path: '@/components',
      pathPrefix: false,
    },
  ],

  devtools: {
    enabled: true,
  },

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
            'Create professional-quality color palettes with ease. Generate beautiful tints and shades from any color code to elevate your design projects. Free, simple, and ready to use.',
        },
        // OGP
        {
          key: 'og:url',
          property: 'og:url',
          content: 'https://tintsshades.web-toolbox.dev',
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
      ],
    },
  },

  css: ['@/assets/main.css'],

  site: {
    url: 'https://tintsshades.web-toolbox.dev',
  },

  ui: {
    colorMode: true,
    fonts: false,
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-11-01',

  eslint: {
    config: {
      stylistic: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  googleFonts: {
    families: {
      Inter: '400..900',
    },
    download: true,
    display: 'swap',
  },

  icon: {
    provider: 'iconify',
    serverBundle: false,
  },

  sitemap: {
    autoLastmod: false,
    discoverImages: false,
    sitemaps: false,
  },
});
