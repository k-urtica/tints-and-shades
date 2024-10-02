<script setup lang="ts">
import type { ToggleSize } from '#ui/types';

const modelValue = defineModel<boolean>();

withDefaults(
  defineProps<{
    label?: string;
    disabled?: boolean;
    size?: ToggleSize;
    caption?: string;
  }>(),
  {
    size: 'lg',
  }
);

const id = useId();
</script>

<template>
  <div>
    <div class="inline-flex items-center gap-3">
      <UToggle :id v-model="modelValue" :size :disabled />
      <label v-if="label" :for="id" class="text-sm">{{ label }}</label>
    </div>
    <slot v-if="caption" name="caption">
      <p class="mt-1 text-sm text-neutral/80">{{ caption }}</p>
    </slot>
  </div>
</template>
