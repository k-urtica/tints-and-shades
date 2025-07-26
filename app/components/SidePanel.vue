<script setup lang="ts">
const { color, weight } = useColorQuery();
</script>

<template>
  <div class="sticky top-0 h-dvh w-[340px] py-3 pl-3">
    <div class="flex h-full flex-col rounded-2xl border-2 border-default/60 bg-default">
      <SiteTitle class="border-b p-5 text-center" />

      <div class="flex flex-1 flex-col gap-6 overflow-y-auto px-5 py-6">
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

      <PanelFooter class="border-t px-5 py-4" />
    </div>
  </div>
</template>
