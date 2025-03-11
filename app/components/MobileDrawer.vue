<script setup lang="ts">
const { color, weight } = storeToRefs(useAppStore());
const isOpen = ref(false);
</script>

<template>
  <div class="fixed bottom-2 z-10 w-full">
    <div
      class="mx-auto flex w-10/12 items-center justify-between gap-4 rounded-3xl border bg-surface py-2 pr-4 pl-6"
    >
      <ColorInput v-model="color" class="w-full" />

      <UButton
        icon="i-ph-gear-duotone"
        variant="ghost"
        color="neutral"
        aria-label="Open settings"
        @click="isOpen = true"
      />
    </div>

    <UDrawer v-model:open="isOpen">
      <template #content>
        <div class="p-5">
          <div class="flex flex-col gap-5">
            <ColorWeight v-model="weight" />
            <AppearanceSettings />

            <PanelFooter class="mt-4 border-t pt-4" />
          </div>
        </div>
      </template>
    </UDrawer>
  </div>
</template>
