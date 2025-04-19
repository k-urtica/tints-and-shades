<script setup lang="ts">
export type ColorItem = {
  color: string;
  weight: string;
  indicator?: boolean;
};

defineProps<{
  colorItem: ColorItem;
}>();

defineEmits<{
  click: [hex: string];
}>();
</script>

<template>
  <a
    href="#"
    :aria-label="`Color ${colorItem.color}`"
    class="group relative block p-4 text-sm transition-colors"
    :style="{ background: colorItem.color }"
    @click.prevent="$emit('click', colorItem.color)"
  >
    <UIcon
      name="i-lucide-copy"
      class="absolute top-2 right-2 size-4 opacity-30 transition-opacity group-hover:opacity-80"
    />

    <div class="font-mono font-semibold tabular-nums">{{ colorItem.weight }}</div>
    <div class="mt-1 flex items-center gap-2">
      <span class="font-mono text-lg font-semibold uppercase">{{ colorItem.color }}</span>
      <UIcon
        v-if="colorItem.indicator"
        name="i-lucide-badge-alert"
        aria-label="Base color indicator"
        class="size-5 animate-pulse"
      />
    </div>
  </a>
</template>
