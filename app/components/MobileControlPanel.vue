<script setup lang="ts">
const { color, weight, format } = useColorQuery();
</script>

<template>
  <PanelContainer
    class="py-2 pr-6 pl-8"
  >
    <div class="mx-auto flex max-w-72 items-center justify-between gap-4">
      <ColorInput v-model="color" class="w-full" />

      <UDrawer>
        <UButton
          icon="i-lucide-settings-2"
          variant="ghost"
          :aria-label="$t('Open settings')"
        />
        <template #content>
          <div class="flex flex-col gap-5 p-5">
            <ColorWeight v-model="weight" />
            <ColorFormatSelector v-model="format" />
            <AppearanceSettings />

            <ControlPanelFooter class="mt-4 border-t pt-4" />
          </div>
        </template>
      </UDrawer>
    </div>
  </PanelContainer>
</template>
