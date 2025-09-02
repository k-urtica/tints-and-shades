<script setup lang="ts">
import * as locales from '@nuxt/ui/locale';

const { locale } = useI18n();
</script>

<template>
  <UApp
    :locale="locales[locale]"
    :tooltip="{ delayDuration: 100, skipDelayDuration: 150 }"
  >
    <div class="flex h-dvh flex-col overflow-hidden bg-base-0">
      <AppHeader class="shrink-0" />

      <div class="flex-1">
        <NuxtPage />
      </div>
    </div>
  </UApp>
</template>
