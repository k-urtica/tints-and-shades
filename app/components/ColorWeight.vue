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
      <UFormField
        :label="$t('Weight')"
        :hint="weight.toString()"
        :ui="{ help: 'flex items-center justify-between text-xs', container: 'mt-2' }"
      >
        <USlider
          v-model="weight"
          :min="MIN_WEIGHT"
          :max="MAX_WEIGHT"
          :step="currentStep"
          size="sm"
        />

        <template #help>
          <span>{{ $t('Lighter') }}</span>
          <span>{{ $t('Stronger') }}</span>
        </template>
      </UFormField>

      <template #fallback>
        <USkeleton class="h-14 w-full" />
      </template>
    </ClientOnly>

    <URadioGroup
      v-model="currentStep"
      variant="table"
      orientation="horizontal"
      indicator="hidden"
      :legend="$t('Step size')"
      :items="WEIGHT_STEPS"
      :ui="{ item: 'w-full py-1' }"
    />
  </div>
</template>
