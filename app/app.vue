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
    <header class="top-0 flex h-16 items-center justify-center border-b md:hidden">
      <h1 class="text-xl font-black dark:text-white">Tints and Shades Generator</h1>
    </header>

    <main class="bg-base-0">
      <NuxtPage />
    </main>
  </UApp>
</template>
