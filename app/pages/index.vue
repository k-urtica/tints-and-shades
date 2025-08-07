<script setup lang="ts">
const { isDocVisible } = useDocToggle();

useSeoMeta({
  title: 'Tints and Shades Generator',
  titleTemplate: '%s',
  description: () => $t(
    'Generate perfect tints and shades from any color code in seconds. Ideal for designers and developers building cohesive color palettes. Free tool, no sign-up required.'
  ),
});
</script>

<template>
  <div class="flex h-(--viewport-content-height) flex-row gap-2.5 p-2">
    <main class="flex flex-1 flex-row gap-2.5">
      <ControlPanel class="hidden lg:block" />

      <div class="flex flex-1 flex-col gap-2 lg:block">
        <ContentPanel v-show="!isDocVisible" />
        <ToolDoc v-show="isDocVisible" />

        <MobileControlPanel class="lg:hidden" />
      </div>
    </main>

    <AsidePanel class="hidden shrink-0 xl:block" />
  </div>
</template>
