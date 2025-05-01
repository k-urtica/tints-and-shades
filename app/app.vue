<script setup lang="ts">
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
  <UApp :tooltip="{ delayDuration: 100, skipDelayDuration: 150 }">
    <header class="top-0 flex h-14 items-center justify-center border-b md:hidden">
      <SiteTitle />
    </header>

    <main class="bg-base-0">
      <NuxtPage />
    </main>
  </UApp>
</template>
