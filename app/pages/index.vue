<script setup lang="ts">
defineOgImageComponent('Default');

useHead({
  titleTemplate: '%s',
});
</script>

<template>
  <div class="flex h-[calc(100dvh-(var(--header-height)))] flex-1 flex-row">
    <SettingsPanel class="hidden lg:block" />

    <ColorGenerator class="flex-1" />

    <SidebarAds class="hidden shrink-0 xl:block" />

    <MobileDrawer class="lg:hidden" />
  </div>
</template>
