<script setup lang="ts">
import { OUTPUT_FORMATS } from '~/constants/color';

const model = defineModel<string>();

const formats = OUTPUT_FORMATS.map((f) => ({
  label: f.toUpperCase(),
  value: f
}));
</script>

<template>
  <URadioGroup
    v-model="model"
    :items="formats"
    variant="table"
    :legend="$t('Output Format')"
    orientation="horizontal"
    :ui="{ item: 'py-1' }"
  />
</template>
