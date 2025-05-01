<script setup lang="ts">
defineOgImageComponent('Default');

useHead({
  titleTemplate: '%s',
});
</script>

<template>
  <div class="flex min-h-svh flex-row gap-3">
    <SidePanel class="hidden lg:block" />

    <Motion as-child v-bind="motionTween()">
      <Generator class="flex-1 lg:mt-3 lg:rounded-t-2xl lg:border" />
    </Motion>

    <AdSidebar class="hidden shrink-0 xl:block" />

    <MobileDrawer class="lg:hidden" />
  </div>
</template>
