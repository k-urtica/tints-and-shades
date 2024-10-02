<script setup lang="ts">
const { color, weight } = storeToRefs(useAppStore());
const isOpen = ref(false);
</script>

<template>
  <div class="fixed bottom-2 z-10 w-full">
    <div
      class="mx-auto flex w-10/12 items-center justify-between gap-4 rounded-3xl border bg-panel py-2 pl-8 pr-4"
    >
      <ColorInput v-model="color" class="w-full" />

      <UButton
        icon="i-ph-gear-duotone"
        variant="ghost"
        color="gray"
        size="lg"
        aria-label="Open settings"
        @click="isOpen = true"
      />
    </div>

    <USlideover
      v-model="isOpen"
      side="bottom"
      :overlay="false"
      :ui="{
        wrapper: 'bottom-20 px-4',
        height: 'h-52',
        base: 'rounded-xl overflow-hidden',
      }"
    >
      <div class="flex flex-col gap-8 overflow-scroll bg-panel px-6 py-8">
        <ColorWeight v-model="weight" />

        <AppearanceSettings />
      </div>
    </USlideover>
  </div>
</template>
