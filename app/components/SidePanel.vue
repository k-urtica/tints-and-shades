<script setup lang="ts">
const { color, weight, appearance } = storeToRefs(useAppStore());
</script>

<template>
  <div class="sticky top-3 my-3 ml-3 h-[calc(100dvh-24px)] w-[340px]">
    <div class="flex h-full flex-col overflow-auto rounded-xl border bg-surface p-6">
      <h1 class="text-balance text-center text-xl font-black">
        Tints and Shades Generator
      </h1>
      <div class="mt-12 flex flex-col gap-8 pb-10">
        <ColorInput v-model="color" label="Hex Color" />

        <ColorWeight v-model="weight" />

        <div class="flex flex-col gap-4">
          <Switch v-model="appearance.border" label="Card Border" />

          <Switch v-model="appearance.isPadded" label="Card Padding" />

          <Switch v-model="appearance.isOneLine" label="Card OneLine" />

          <Switch v-model="appearance.indicator" label="Indicator" />

          <Switch v-model="appearance.copyWithHash" label="Copy with Hash" />
        </div>
      </div>

      <div class="mt-auto">
        <ThemeSwitcher />
      </div>
    </div>
  </div>
</template>
