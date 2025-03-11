<script setup lang="ts">
const modelValue = defineModel<boolean>();

defineProps<{
  label?: string;
  disabled?: boolean;
  help?: string;
}>();
</script>

<template>
  <UFormField :help>
    <USwitch v-model="modelValue" size="lg" :disabled :label />
  </UFormField>
</template>
