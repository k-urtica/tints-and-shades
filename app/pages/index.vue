<script setup lang="ts">
defineOgImageComponent('Default');

const { isDocVisible } = useDocToggle();

useHead({
  titleTemplate: '%s',
});
</script>

<template>
  <div class="flex h-(--viewport-content-height) flex-row gap-2.5 p-2">
    <ControlPanel class="hidden lg:block" />

    <div class="flex flex-1 flex-col gap-2 lg:block">
      <ContentPanel v-show="!isDocVisible" />
      <ToolDoc v-show="isDocVisible" />

      <MobileControlPanel class="lg:hidden" />
    </div>

    <AsidePanel class="hidden shrink-0 xl:block" />
  </div>
</template>
