<script setup lang="ts">
export interface ColorItem {
  color: string;
  weight: string;
  indicator?: boolean;
}

const props = defineProps<{
  colorItem: ColorItem;
  isBright?: boolean;
  hasBorder?: boolean;
  showText?: boolean;
}>();

defineEmits<{
  click: [hex: string];
}>();

const cardClasses = computed(() =>
  cn(props.isBright ? 'text-zinc-950' : 'text-zinc-50', {
    'ring-1 ring-(--ui-border)': props.hasBorder,
  })
);
</script>

<template>
  <UTooltip
    :text="`${$t('Copy')}: ${colorItem.color}`"
    arrow
    :content="{ side: 'top', align: 'center', sideOffset: -8 }"
  >
    <button
      type="button"
      :aria-label="`Copy Color ${colorItem.color}`"
      :class="
        cn(
          'group relative block px-4 py-5 text-left text-sm transition-colors',
          { 'h-16': !showText },
          cardClasses
        )
      "
      :style="{ background: colorItem.color }"
      @click="$emit('click', colorItem.color)"
    >
      <UIcon
        name="i-lucide-copy"
        class="absolute top-2 right-2 size-4 opacity-30 transition-opacity group-hover:opacity-80"
      />

      <template v-if="showText">
        <div class="font-mono font-medium tabular-nums">{{ colorItem.weight }}</div>
        <div class="mt-0.5 flex items-center gap-2">
          <span class="font-semibold uppercase">{{ colorItem.color }}</span>
          <UIcon
            v-if="colorItem.indicator"
            name="i-lucide-badge-alert"
            aria-label="Base color indicator"
            class="size-5 animate-pulse"
          />
        </div>
      </template>
    </button>
  </UTooltip>
</template>
