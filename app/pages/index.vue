<script setup lang="ts">
defineOgImageComponent('Default', {
  title: 'Tints and Shades Generator',
});

useHead({
  titleTemplate: '%s',
});
</script>

<template>
  <div class="flex min-h-dvh flex-row">
    <SidePanel class="hidden md:block" />

    <Generator class="flex-1 md:mt-3 md:ml-6 md:rounded-t-xl md:border" />

    <div class="hidden w-[280px] shrink-0 p-4 xl:block">
      <ScriptGoogleAdsense
        data-ad-client="ca-pub-6155745382628091"
        data-ad-slot="3784163880"
        :data-full-width-responsive="false"
        data-ad-format="auto"
        class="sticky top-4 mx-auto max-w-full"
      >
        <template #error>Please disable your ad blocker.</template>
      </ScriptGoogleAdsense>
    </div>

    <MobileDrawer class="md:hidden" />
  </div>
</template>
