<script setup lang="ts">
import { OUTPUT_FORMATS } from '~/constants/color';

const model = defineModel<string>();

const formats = OUTPUT_FORMATS.map((f) => ({
  label: f.toUpperCase(),
  value: f
}));
</script>

<template>
  <ClientOnly>
    <URadioGroup
      v-model="model"
      :items="formats"
      variant="table"
      indicator="hidden"
      :legend="$t('Output Format')"
      orientation="horizontal"
      :ui="{ item: 'py-1 w-full' }"
    />
    <template #fallback>
      <USkeleton class="h-14 w-full" />
    </template>
  </ClientOnly>
</template>
