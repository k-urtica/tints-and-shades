<script setup lang="ts">
const { appearance } = storeToRefs(useAppStore());
</script>

<template>
  <div class="flex flex-col gap-4">
    <Switch v-model="appearance.border" label="Card Border" />

    <Switch v-model="appearance.isPadded" label="Card Padding" />

    <Switch v-model="appearance.isOneLine" label="Card OneLine" />

    <Switch v-model="appearance.indicator" label="Indicator" />

    <Switch v-model="appearance.copyWithHash" label="Copy with Hash" />
  </div>
</template>
