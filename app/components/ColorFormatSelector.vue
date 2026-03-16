<script setup lang="ts">
import { OUTPUT_FORMATS } from '~/constants/color';

const model = defineModel<string>();

const formats = OUTPUT_FORMATS.map((f) => ({
  label: f.toUpperCase(),
  value: f
}));
</script>

<template>
  <BaseRadioGroup
    v-model="model"
    :items="formats"
    :legend="$t('Output Format')"
  />
</template>
