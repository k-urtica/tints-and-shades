<script setup lang="ts">
defineOgImageComponent('Default');

useHead({
  titleTemplate: '%s',
});
</script>

<template>
  <div class="flex min-h-svh flex-row gap-4">
    <SidePanel class="hidden md:block" />

    <Generator class="flex-1 md:mt-3 md:rounded-t-2xl md:border" />

    <AdSidebar class="hidden shrink-0 xl:block" />

    <MobileDrawer class="md:hidden" />
  </div>
</template>
