<script setup lang="ts">
import { random } from '@ctrl/tinycolor';

const color = defineModel<string>();

defineProps<{
  label?: string;
}>();

const id = useId();
const el = ref<HTMLInputElement>();

const setRandomColor = () => {
  color.value = random().toHexString();
};
</script>

<template>
  <div>
    <label v-if="label" :for="id" class="mb-1 inline-flex text-sm text-neutral">{{
      label
    }}</label>
    <UInput
      :id
      v-model="color"
      size="lg"
      class="relative"
      placeholder="#fafafa"
      maxlength="7"
      :ui="{ icon: { leading: { pointer: '' }, trailing: { pointer: '' } } }"
    >
      <template #leading>
        <UButton
          color="gray"
          variant="ghost"
          :padded="false"
          aria-label="Pick color"
          @click="el?.click()"
        >
          <span class="size-5 rounded-full ring-1" :style="{ background: color }" />
        </UButton>

        <input
          ref="el"
          v-model="color"
          type="color"
          class="absolute -bottom-0 left-0 w-1 opacity-0"
        />
      </template>
      <template #trailing>
        <UButton
          color="gray"
          variant="ghost"
          :padded="false"
          icon="i-ph-arrows-clockwise-bold"
          aria-label="Random color"
          @click="setRandomColor"
        />
      </template>
    </UInput>
  </div>
</template>
