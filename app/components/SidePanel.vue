<script setup lang="ts">
const { color, weight } = storeToRefs(useAppStore());
</script>

<template>
  <div class="sticky top-3 my-3 ml-3 h-[calc(100dvh-24px)] w-[340px] bg-surface">
    <div class="flex h-full flex-col overflow-auto rounded-xl border p-6">
      <h1 class="text-center text-lg font-black text-balance dark:text-white">
        Tints and Shades Generator
      </h1>
      <div class="mt-12 flex flex-col gap-8 pb-10">
        <ColorInput v-model="color" label="Hex Color" />
        <ColorWeight v-model="weight" />
        <AppearanceSettings />
      </div>

      <PanelFooter class="mt-auto border-t pt-2" />
    </div>
  </div>
</template>
