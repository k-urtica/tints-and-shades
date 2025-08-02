<script setup lang="ts">
const { color, weight, format } = useColorQuery();
</script>

<template>
  <div class="w-[340px]">
    <PanelContainer class="flex h-full flex-col">
      <div class="flex flex-1 flex-col gap-5 overflow-y-auto px-5 py-6">
        <div>
          <BaseIconText
            as="h3"
            icon="i-lucide-palette"
            class="mb-3 font-semibold"
          >
            {{ $t('Color Settings') }}
          </BaseIconText>

          <div class="flex flex-col gap-5">
            <ColorInput v-model="color" :label="$t('Hex Color')" />
            <ColorWeight v-model="weight" />
            <ColorFormatSelector v-model="format" />
          </div>
        </div>

        <div class="border-t pt-4">
          <BaseIconText
            as="h3"
            icon="i-lucide-settings-2"
            class="mb-3 font-semibold"
          >
            {{ $t('Display Options') }}
          </BaseIconText>

          <AppearanceSettings />
        </div>
      </div>

      <ControlPanelFooter class="border-t px-5 py-4" />
    </PanelContainer>
  </div>
</template>
