const SITE_NAME = 'Tints and Shades Generator';
const SITE_URL = 'https://tintsshades.web-toolbox.dev';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@vueuse/nuxt',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@nuxt/image',
    'nuxt-og-image',
    '@nuxtjs/google-fonts',
    'motion-v/nuxt',
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

  i18n: {
    baseUrl: SITE_URL,
    locales: [
      {
        code: 'en',
        language: 'en-US',
        name: 'English',
        file: 'en.yaml',
      },
      {
        code: 'ja',
        language: 'ja-JP',
        name: '日本語',
        file: 'ja.yaml',
      },
      {
        code: 'zh_cn',
        language: 'zh-CN',
        name: '中文',
        file: 'zh.yaml',
      },
      {
        code: 'es',
        language: 'es-ES',
        name: 'Español',
        file: 'es.yaml',
      },
      {
        code: 'fr',
        language: 'fr-FR',
        name: 'Français',
        file: 'fr.yaml',
      },
      {
        code: 'de',
        language: 'de-DE',
        name: 'Deutsch',
        file: 'de.yaml',
      },
      {
        code: 'ko',
        language: 'ko-KR',
        name: '한국어',
        file: 'ko.yaml',
      },
    ],
    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    vueI18n: './i18n.config.ts',
    restructureDir: 'i18n',
    lazy: true,
    experimental: {
      autoImportTranslationFunctions: true,
    },
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
