<script setup lang="ts">
const description =
  'Generate perfect tints and shades from any color code in seconds. Ideal for designers and developers building cohesive color palettes. Free tool, no sign-up required.';

useSeoMeta({
  description,
  ogDescription: description,
});
</script>

<template>
  <UApp :tooltip="{ delayDuration: 100, skipDelayDuration: 150 }">
    <header class="flex h-16 items-center justify-center md:hidden">
      <h1 class="text-xl font-black dark:text-white">Tints and Shades Generator</h1>
    </header>

    <NuxtPage />
  </UApp>
</template>
