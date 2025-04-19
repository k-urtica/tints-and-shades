<script setup lang="ts">
import { random } from '@ctrl/tinycolor';

const color = defineModel<string>({
  set: (v) => (v.length === 6 && !v.startsWith('#') ? `#${v}` : v),
});

defineProps<{
  label?: string;
}>();

const id = useId();
const inputEl = useTemplateRef('inputEl');

const setRandomColor = () => {
  color.value = random().toHexString();
};
</script>

<template>
  <UFormField :label>
    <UInput
      :id
      v-model="color"
      size="xl"
      class="relative"
      placeholder="#fafafa"
      maxlength="7"
    >
      <template #leading>
        <UButton
          color="neutral"
          variant="ghost"
          square
          aria-label="Pick color"
          @click="inputEl?.click()"
        >
          <span
            class="size-4 rounded-full ring-1 ring-current/60"
            :style="{ background: color }"
          />
        </UButton>

        <input
          ref="inputEl"
          v-model="color"
          type="color"
          class="absolute -bottom-0 left-0 w-1 opacity-0"
        />
      </template>
      <template #trailing>
        <UTooltip text="Random color" arrow :content="{ side: 'top' }">
          <UButton
            color="neutral"
            variant="ghost"
            square
            icon="i-lucide-refresh-cw"
            aria-label="Random color"
            @click="setRandomColor"
          />
        </UTooltip>
      </template>
    </UInput>
  </UFormField>
</template>
