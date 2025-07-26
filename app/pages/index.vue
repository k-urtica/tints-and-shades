<script setup lang="ts">
defineOgImageComponent('Default');

useHead({
  titleTemplate: '%s',
});
</script>

<template>
  <div class="flex h-[calc(100dvh-(var(--header-height)))] flex-1 flex-row">
    <SidePanel class="hidden lg:block" />

    <Generator class="flex-1" />

    <AdSidebar class="hidden shrink-0 xl:block" />

    <MobileDrawer class="lg:hidden" />
  </div>
</template>
