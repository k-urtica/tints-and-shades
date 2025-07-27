<script setup lang="ts">
const { color, weight } = useColorQuery();
</script>

<template>
  <div class="w-[340px]">
    <PanelContainer class="flex h-full flex-col">
      <div class="flex flex-1 flex-col gap-6 overflow-y-auto px-5 py-6">
        <div class="space-y-3">
          <h3 class="flex items-center gap-1.5 font-bold">
            <UIcon name="i-lucide-palette" class="size-4.5" />
            {{ $t('Color Settings') }}
          </h3>
          <ColorInput v-model="color" :label="$t('Hex Color')" />
          <ColorWeight v-model="weight" />
        </div>

        <div class="space-y-3 border-t pt-4">
          <h3 class="flex items-center gap-1.5 font-bold">
            <UIcon name="i-lucide-settings-2" class="size-4.5" />
            {{ $t('Display Options') }}
          </h3>
          <AppearanceSettings />
        </div>
      </div>

      <PanelFooter class="border-t px-5 py-4" />
    </PanelContainer>
  </div>
</template>
