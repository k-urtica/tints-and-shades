<script setup lang="ts">
const { color, weight, format } = useColorQuery();
</script>

<template>
  <div class="w-[340px]">
    <PanelContainer class="flex h-full flex-col">
      <div class="flex flex-1 flex-col gap-5 overflow-y-auto px-5 py-6">
        <div>
          <h3 class="mb-3 flex items-center gap-1.5 font-semibold">
            <UIcon name="i-lucide-palette" class="size-4.5" />
            {{ $t('Color Settings') }}
          </h3>
          <div class="space-y-5">
            <ColorInput v-model="color" :label="$t('Hex Color')" />
            <ColorWeight v-model="weight" />
            <ColorFormatSelector v-model="format" />
          </div>
        </div>

        <div class="border-t pt-4">
          <h3 class="mb-3 flex items-center gap-1.5 font-semibold">
            <UIcon name="i-lucide-settings-2" class="size-4.5" />
            {{ $t('Display Options') }}
          </h3>
          <AppearanceSettings />
        </div>
      </div>

      <ControlPanelFooter class="border-t px-5 py-4" />
    </PanelContainer>
  </div>
</template>
