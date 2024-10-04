<script setup lang="ts">
const weight = defineModel<number>({ default: 5 });

const currentStep = ref(1);

const weightSteps = computed(() => [
  {
    label: '1.0',
    value: 1,
  },
  {
    label: '0.5',
    value: 0.5,
  },
  {
    label: '0.1',
    value: 0.1,
  },
]);
</script>

<template>
  <div>
    <Slider v-model="weight" label="Weight" :min="1" :max="50" :step="currentStep" />

    <div class="mt-4 flex items-center gap-2">
      <div class="me-1 text-sm text-neutral">weight step</div>
      <UButton
        v-for="{ label, value } in weightSteps"
        :key="value"
        :label
        color="gray"
        variant="solid"
        :leading-icon="value === currentStep ? 'i-ph-check-circle-duotone' : undefined"
        size="2xs"
        @click="currentStep = value"
      />
    </div>
  </div>
</template>
