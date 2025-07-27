<script setup lang="ts">
defineOgImageComponent('Default');

const route = useRoute();
const isDocVisible = computed(() => route.query.doc === 'true');

useHead({
  titleTemplate: '%s',
});
</script>

<template>
  <div class="flex h-(--viewport-content-height) flex-row gap-2.5 p-2.5">
    <SettingsPanel class="hidden lg:block" />

    <AnimatePresence :initial="false" mode="popLayout">
      <Motion as-child v-bind="fade()">
        <ColorGenerator v-show="!isDocVisible" class="flex-1" />
      </Motion>
    </AnimatePresence>
    <AnimatePresence mode="popLayout">
      <Motion as-child v-bind="fade()">
        <ToolDoc v-show="isDocVisible" class="flex-1" />
      </Motion>
    </AnimatePresence>

    <SidebarAds class="hidden shrink-0 xl:block" />

    <MobileDrawer class="lg:hidden" />
  </div>
</template>
