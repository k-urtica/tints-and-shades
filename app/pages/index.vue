<script setup lang="ts">
defineOgImageComponent('Default', {
  title: 'Tints and Shades Generator',
});

useHead({
  titleTemplate: '%s',
});
</script>

<template>
  <div class="flex min-h-dvh flex-row gap-6">
    <SidePanel class="hidden md:block" />

    <Generator class="flex-1 border md:mt-3 md:rounded-tl-xl" />

    <MobileDrawer class="md:hidden" />
  </div>
</template>
