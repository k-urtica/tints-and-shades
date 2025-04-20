<script setup lang="ts">
const { color, weight } = storeToRefs(useAppStore());
</script>

<template>
  <div class="sticky top-3 my-3 ml-3 h-[calc(100dvh-24px)] w-[340px]">
    <div class="flex h-full flex-col overflow-auto rounded-xl border bg-surface p-6">
      <h1 class="text-center text-lg font-black">Tints and Shades Generator</h1>

      <div class="mt-12 flex flex-col gap-6 pb-10">
        <div class="flex flex-col gap-3">
          <h3 class="flex items-center gap-1.5 font-bold">
            <UIcon name="i-lucide-palette" class="size-4.5" />
            Color Settings
          </h3>
          <ColorInput v-model="color" label="Hex Color" />
          <ColorWeight v-model="weight" />
        </div>

        <div class="flex flex-col gap-3 border-t pt-4">
          <h3 class="flex items-center gap-1.5 font-bold">
            <UIcon name="i-lucide-eye" class="size-4.5" />
            Display Options
          </h3>
          <AppearanceSettings />
        </div>
      </div>

      <PanelFooter class="mt-auto border-t pt-2" />
    </div>
  </div>
</template>
