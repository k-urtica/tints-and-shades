<script setup lang="ts">
import type { ColorType, GeneratedColor } from '@/composables/useColor';

export type ExtendedColorItem = GeneratedColor & {
  isBright: boolean;
};

const { color, weight, appearance } = storeToRefs(useAppStore());
const { copy, copied } = useClipboard({ legacy: true });
const { show } = useAppToast();
const { generateColors, isBrightColor, formatHexColor } = useColor();

const activeTab = ref<'all' | 'tints' | 'shades'>('all');

const colors = computed<GeneratedColor[]>(() =>
  generateColors(color.value, weight.value)
);

const colorItems = computed<ExtendedColorItem[]>(() =>
  colors.value.map((c) => ({
    color: c.color,
    weight: c.weight,
    indicator: appearance.value.indicator && c.type === 'base',
    isBright: isBrightColor(c.color),
    type: c.type,
  }))
);

const filteredColorItems = computed<ExtendedColorItem[]>(() => {
  if (activeTab.value === 'all') return colorItems.value;

  const isActiveType = (type: ColorType) =>
    type === 'base' || type === (activeTab.value === 'tints' ? 'tint' : 'shade');

  return colorItems.value.filter((item) => isActiveType(item.type));
});

const doCopy = async (hexColor: string) => {
  const formattedColor = formatHexColor(hexColor, appearance.value.copyWithHash);
  await copy(formattedColor);

  if (copied.value) {
    show({ title: `Copied! ${formattedColor}`, toastType: 'success' });
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
      <div class="flex flex-wrap items-center gap-2">
        <h3 class="font-bold">Preview</h3>
        <UBadge variant="subtle">Click to Copy</UBadge>

        <div class="ml-auto w-52">
          <UTabs
            v-model="activeTab"
            :items="[
              { label: 'All', value: 'all' },
              { label: 'Tints', value: 'tints' },
              { label: 'Shades', value: 'shades' },
            ]"
            color="neutral"
            :content="false"
            size="xs"
          />
        </div>
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
          v-for="(colorItem, idx) in filteredColorItems"
          :key="idx"
          :text="`Copy: ${colorItem.color}`"
          arrow
          :content="{ side: 'top', align: 'center', sideOffset: -8 }"
        >
          <ColorCard
            :color-item="colorItem"
            :class="
              cn(
                { 'ring-1 ring-(--ui-border)': appearance.border },
                colorItem.isBright ? 'text-zinc-950' : 'text-zinc-50',
                { 'rounded-lg': appearance.isPadded }
              )
            "
            @click="() => doCopy(colorItem.color)"
          />
        </UTooltip>
      </div>
    </template>
  </div>
</template>
