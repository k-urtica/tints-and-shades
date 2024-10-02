<script setup lang="ts">
useHead({
  titleTemplate: '%s',
});
</script>

<template>
  <div class="flex min-h-dvh flex-row gap-6">
    <SidePanel class="hidden md:block" />

    <Generator class="flex-1 border bg-surface md:mt-3 md:rounded-tl-xl" />

    <MobilePanel class="md:hidden" />
  </div>
</template>
