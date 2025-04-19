<script setup lang="ts">
import Values from 'values.js';
import type { ColorItem } from '@/components/ColorCard.vue';

const { color, weight, appearance } = storeToRefs(useAppStore());
const { copy, copied } = useClipboard({ legacy: true });
const { show } = useAppToast();

const colors = computed(() => {
  try {
    return new Values(color.value).all(weight.value);
  } catch {
    return [];
  }
});

const colorItems = computed<(ColorItem & { isBright: boolean })[]>(() => {
  return colors.value.map((c) => ({
    hex: c.hexString(),
    weight: `${c.type === 'base' ? '' : c.type === 'tint' ? '+' : '-'}${c.weight.toFixed()}%`,
    indicator: appearance.value.indicator && c.weight === 0,
    isBright: c.getBrightness() >= 45,
  }));
});

const doCopy = async (hexColor: string) => {
  const _hexColor = appearance.value.copyWithHash ? hexColor : hexColor.slice(1);
  await copy(_hexColor);
  if (copied.value) {
    show({ title: `Copied! ${_hexColor}`, toastType: 'success' });
  }
};
</script>

<template>
  <div class="p-5">
    <UAlert
      v-if="!colors.length"
      variant="subtle"
      color="warning"
      title="Could not preview. Check configuration."
    />

    <template v-else>
      <div class="flex items-center gap-2">
        <h3 class="font-bold">Preview</h3>
        <UBadge variant="subtle">Click to Copy</UBadge>
      </div>

      <div
        class="mt-4 grid transition-[gap,padding]"
        :class="[
          appearance.isPadded ? 'gap-2' : 'gap-0',
          appearance.isOneLine
            ? 'grid-cols-1 overflow-hidden rounded-lg'
            : 'sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5',
        ]"
      >
        <UTooltip
          v-for="(colorItem, idx) in colorItems"
          :key="idx"
          :text="`Copy: ${colorItem.hex}`"
          arrow
          :content="{ side: 'top', align: 'center', sideOffset: -8 }"
        >
          <ColorCard
            :color-item
            :class="
              cn(
                { 'ring-1 ring-(--ui-border)': appearance.border },
                colorItem.isBright ? 'text-zinc-950' : 'text-zinc-50',
                { 'rounded-lg': appearance.isPadded }
              )
            "
            @click="doCopy"
          />
        </UTooltip>
      </div>
    </template>
  </div>
</template>
