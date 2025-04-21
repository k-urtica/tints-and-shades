const SITE_NAME = 'Tints and Shades Generator';
const SITE_URL = 'https://tintsshades.web-toolbox.dev';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
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
      title: SITE_NAME,
      titleTemplate: '%s | ' + SITE_NAME,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // OGP
        { key: 'og:url', property: 'og:url', content: SITE_URL },
        { key: 'og:type', property: 'og:type', content: 'website' },
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
    name: SITE_NAME,
    url: SITE_URL,
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
      'Exo 2': '400..900',
    },
    download: true,
    display: 'swap',
  },

  icon: {
    provider: 'iconify',
    clientBundle: {
      scan: true,
    },
    serverBundle: false,
  },

  ogImage: {
    enabled: true,
    fonts: ['Exo+2:700'],
    zeroRuntime: true,
  },

  sitemap: {
    autoLastmod: false,
    discoverImages: false,
    sitemaps: false,
  },
});
