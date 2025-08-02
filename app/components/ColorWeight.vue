<script setup lang="ts">
import type { RadioGroupItem } from '@nuxt/ui';
import { DEFAULT_WEIGHT, MAX_WEIGHT, MIN_WEIGHT } from '~/constants/color';

const weight = defineModel<number>({ default: DEFAULT_WEIGHT });

const currentStep = ref(1);

const WEIGHT_STEPS: RadioGroupItem[] = [
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
  <div class="space-y-2">
    <ClientOnly>
      <BaseSlider
        v-model="weight"
        :min="MIN_WEIGHT"
        :max="MAX_WEIGHT"
        :step="currentStep"
        :label="$t('Weight')"
      >
        <template #help>
          <span class="flex items-center justify-between text-xs">
            <span>{{ $t('Lighter') }}</span>
            <span>{{ $t('Stronger') }}</span>
          </span>
        </template>
      </BaseSlider>

      <template #fallback>
        <USkeleton class="h-14 w-full" />
      </template>
    </ClientOnly>

    <BaseRadioGroup
      v-model="currentStep"
      :legend="$t('Step size')"
      :items="WEIGHT_STEPS"
    />
  </div>
</template>
