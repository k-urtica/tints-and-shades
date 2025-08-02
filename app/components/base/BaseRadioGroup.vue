<script setup lang="ts">
import type { RadioGroupProps } from '@nuxt/ui';

const model = defineModel<RadioGroupProps['modelValue']>();

defineProps<{
  items: RadioGroupProps['items'];
  legend?: string;
}>();
</script>

<template>
  <URadioGroup
    v-model="model"
    :items="items"
    :legend="legend"
    orientation="horizontal"
    indicator="hidden"
    variant="table"
    :ui="{ item: 'w-full py-1' }"
  />
</template>
