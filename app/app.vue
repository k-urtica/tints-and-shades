<template>
  <UApp :tooltip="{ delayDuration: 100, skipDelayDuration: 150 }">
    <header class="flex h-16 items-center justify-center md:hidden">
      <h1 class="text-xl font-black dark:text-white">Tints and Shades Generator</h1>
    </header>

    <NuxtPage />
  </UApp>
</template>
