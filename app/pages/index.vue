<script setup lang="ts">
defineOgImageComponent('Default');

useHead({
  titleTemplate: '%s',
});
</script>

<template>
  <div class="flex h-(--viewport-content-height) flex-row gap-2.5 p-2.5">
    <SettingsPanel class="hidden lg:block" />

    <ColorGenerator class="flex-1" />

    <SidebarAds class="hidden shrink-0 xl:block" />

    <MobileDrawer class="lg:hidden" />
  </div>
</template>
