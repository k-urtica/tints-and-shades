<script setup lang="ts">
const model = defineModel<number>({ default: 0 });

withDefaults(defineProps<{
  label?: string;
  min?: number;
  max?: number;
  step?: number;
}>(), {
  min: 0,
  max: 100,
  step: 1,
});
</script>

<template>
  <div class="flex items-center justify-between gap-2">
    <UFormField
      :label="label"
      :ui="{ container: 'mt-2' }"
      class="flex-1"
    >
      <USlider
        v-model="model"
        :min="min"
        :max="max"
        :step="step"
        size="sm"
      />
      <template v-if="$slots.help" #help>
        <slot name="help" />
      </template>
    </UFormField>

    <div class="mt-2 self-start">
      <UInputNumber
        v-model="model"
        :min="min"
        :max="max"
        :step="step"
        variant="soft"
        size="sm"
        :increment="false"
        :decrement="false"
        class="w-12"
      />
    </div>
  </div>
</template>
