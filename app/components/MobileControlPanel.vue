<script setup lang="ts">
const { color } = useColorQuery();
</script>

<template>
  <PanelContainer
    class="py-2 pr-6 pl-8"
  >
    <div class="mx-auto flex max-w-72 items-center justify-between gap-5">
      <ColorInput v-model="color" class="w-full" />

      <UDrawer>
        <UButton
          icon="i-lucide-settings-2"
          variant="ghost"
          :aria-label="$t('Open settings')"
        />
        <template #content>
          <div class="flex h-full min-h-0 flex-col overflow-hidden">
            <ControlPanelContent class="flex-1 overflow-y-auto p-6 px-5" />
            <ControlPanelFooter class="border-t p-5" />
          </div>
        </template>
      </UDrawer>
    </div>
  </PanelContainer>
</template>
