<script setup lang="ts">
const weight = defineModel<number>({ default: 5 });

const currentStep = ref(1);

const WEIGHT_STEPS = [
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
];
</script>

<template>
  <div>
    <ClientOnly>
      <UFormField
        :label="$t('Weight')"
        :hint="weight.toString()"
        :ui="{ help: 'flex items-center justify-between text-xs' }"
      >
        <USlider v-model="weight" :min="1" :max="50" :step="currentStep" />

        <template #help>
          <span>{{ $t('Lighter') }}</span>
          <span>{{ $t('Stronger') }}</span>
        </template>
      </UFormField>

      <template #fallback>
        <USkeleton class="h-14 w-full" />
      </template>
    </ClientOnly>

    <div class="mt-3 flex items-center gap-2">
      <fieldset class="contents">
        <legend class="text-neutral text-sm">{{ $t('Step size') }}</legend>
        <UButtonGroup size="xs">
          <UButton
            v-for="{ label, value } in WEIGHT_STEPS"
            :key="value"
            :label="label"
            color="neutral"
            :variant="currentStep === value ? 'solid' : 'outline'"
            :aria-label="`Set step size to ${label}`"
            :aria-pressed="currentStep === value"
            class="px-4"
            @click="currentStep = value"
          />
        </UButtonGroup>
      </fieldset>
    </div>
  </div>
</template>
