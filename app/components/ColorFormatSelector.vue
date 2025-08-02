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
    <BaseRadioGroup
      v-model="model"
      :items="formats"
      :legend="$t('Output Format')"
    />
    <template #fallback>
      <USkeleton class="h-14 w-full" />
    </template>
  </ClientOnly>
</template>
