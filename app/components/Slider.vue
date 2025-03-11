<script setup lang="ts">
const model = defineModel<number>();

const props = withDefaults(
  defineProps<{
    label?: string;
    min?: number;
    max?: number;
    step?: number;
  }>(),
  {
    size: 'md',
    min: 1,
    max: 100,
  }
);

const id = `range-${useId()}`;

const onInput = (e: Event) => {
  const v = Number((e.target as HTMLInputElement).value);
  if (v < props.min) {
    model.value = props.min;
    (e.target as HTMLInputElement).value = props.min.toString();
  } else if (v > props.max) {
    model.value = props.max;
    (e.target as HTMLInputElement).value = props.max.toString();
  } else {
    model.value = v;
  }
};
</script>

<template>
  <div>
    <div class="mb-1 flex items-center justify-end">
      <label :for="id" class="me-auto inline-flex text-sm">{{ label }}</label>
      <UInput
        :model-value="model"
        type="number"
        size="xs"
        :min
        :max
        :step
        class="w-16"
        @input="onInput"
      />
    </div>

    <USlider :id v-model="model" :min :max :step />
  </div>
</template>
