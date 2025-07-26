<script setup lang="ts">
import type { RadioGroupItem } from '@nuxt/ui';

const weight = defineModel<number>({ default: 5 });

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
  <div class="space-y-4">
    <ClientOnly>
      <UFormField
        :label="$t('Weight')"
        :hint="weight.toString()"
        :ui="{ help: 'flex items-center justify-between text-xs' }"
      >
        <USlider
          v-model="weight"
          :min="1"
          :max="50"
          :step="currentStep"
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
      indicator="start"
      :legend="$t('Step size')"
      :items="WEIGHT_STEPS"
      :ui="{ item: 'py-1.5' }"
      :style="{ '--ui-radius': '0.25rem' }"
    />
  </div>
</template>
