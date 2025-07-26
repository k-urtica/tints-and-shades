<script setup lang="ts">
const color = defineModel<string>({
  set: (v) => (v.length === 6 && !v.startsWith('#') ? `#${v}` : v),
});

defineProps<{
  label?: string;
}>();

const { getRandomColor } = useColor();

const inputEl = useTemplateRef('inputEl');

const setRandomColor = () => {
  color.value = getRandomColor();
};
</script>

<template>
  <UFormField :label>
    <ClientOnly>
      <UInput
        v-model="color"
        size="xl"
        class="relative w-full"
        placeholder="#fafafa"
        maxlength="7"
      >
        <template #leading>
          <UButton
            variant="ghost"
            square
            :aria-label="$t('Pick color')"
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
          >
        </template>
        <template #trailing>
          <UTooltip :text="$t('Random color')" arrow :content="{ side: 'top' }">
            <UButton
              variant="ghost"
              square
              icon="i-lucide-refresh-cw"
              :aria-label="$t('Random color')"
              @click="setRandomColor"
            />
          </UTooltip>
        </template>
      </UInput>

      <template #fallback>
        <USkeleton class="h-10 w-full" />
      </template>
    </ClientOnly>
  </UFormField>
</template>
