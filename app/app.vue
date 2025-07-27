<script setup lang="ts">
import * as locales from '@nuxt/ui/locale';

const { locale } = useI18n();

const description = computed(() =>
  $t(
    'Generate perfect tints and shades from any color code in seconds. Ideal for designers and developers building cohesive color palettes. Free tool, no sign-up required.'
  )
);

const i18nHead = useLocaleHead({
  dir: true,
  lang: true,
  seo: true,
});

useHead({
  htmlAttrs: {
    lang: () => i18nHead.value.htmlAttrs!.lang,
    dir: () => locales[locale.value].dir,
  },
  meta: () => [
    {
      key: 'description',
      name: 'description',
      content: description,
    },
    {
      key: 'og:description',
      property: 'og:description',
      content: description,
    },
    ...(i18nHead.value.meta || []),
  ],

  link: () => [...(i18nHead.value.link || [])],
});
</script>

<template>
  <UApp
    :locale="locales[locale]"
    :tooltip="{ delayDuration: 100, skipDelayDuration: 150 }"
  >
    <div class="flex flex-col bg-base-0">
      <AppHeader class="shrink-0" />

      <main class="flex-1">
        <NuxtPage />
      </main>
    </div>
  </UApp>
</template>
