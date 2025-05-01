<script setup lang="ts">
const { color, weight } = storeToRefs(useAppStore());
</script>

<template>
  <div class="sticky top-3 my-3 ml-3 h-[calc(100dvh-24px)] w-[320px]">
    <div class="flex h-full flex-col overflow-auto rounded-2xl border bg-background">
      <SiteTitle class="border-b p-4 text-center" />

      <div class="mt-4 flex flex-1 flex-col gap-6 p-5 pb-10">
        <div class="flex flex-col gap-3">
          <h3 class="flex items-center gap-1.5 font-bold">
            <UIcon name="i-lucide-palette" class="size-4.5" />
            {{ $t('Color Settings') }}
          </h3>
          <ColorInput v-model="color" :label="$t('Hex Color')" />
          <ColorWeight v-model="weight" />
        </div>

        <div class="flex flex-col gap-3 border-t pt-4">
          <h3 class="flex items-center gap-1.5 font-bold">
            <UIcon name="i-lucide-eye" class="size-4.5" />
            {{ $t('Display Options') }}
          </h3>
          <AppearanceSettings />
        </div>
      </div>

      <PanelFooter class="mt-auto border-t px-5 py-4" />
    </div>
  </div>
</template>
