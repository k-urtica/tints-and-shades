<script setup lang="ts">
import type { TabsItem } from '#ui/types';
import type { ColorType, GeneratedColor } from '@/composables/useColor';

type TabValue = 'all' | 'tints' | 'shades';

const { color, weight, appearance } = storeToRefs(useAppStore());
const { copy, copied } = useClipboard({ legacy: true });
const { show } = useAppToast();
const { generateColors, formatHexColor } = useColor();

const tabItems = [
  { label: 'All', value: 'all' },
  { label: 'Tints', value: 'tints' },
  { label: 'Shades', value: 'shades' },
] as const satisfies TabsItem[];

const activeTab = ref<TabValue>(tabItems[0].value);

const colors = computed<GeneratedColor[]>(() =>
  generateColors(color.value, weight.value)
);

const filteredColorItems = computed<GeneratedColor[]>(() => {
  if (activeTab.value === 'all') return colors.value;

  const isActiveType = (type: ColorType) =>
    type === 'base' || type === (activeTab.value === 'tints' ? 'tint' : 'shade');

  return colors.value.filter(({ type }) => isActiveType(type));
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
            :items="tabItems"
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
          v-for="({ isBright, ...colorItem }, idx) in filteredColorItems"
          :key="idx"
          :text="`Copy: ${colorItem.color}`"
          arrow
          :content="{ side: 'top', align: 'center', sideOffset: -8 }"
        >
          <ColorCard
            :color-item="{
              ...colorItem,
              indicator: appearance.indicator && colorItem.type === 'base',
            }"
            :class="
              cn(
                { 'ring-1 ring-(--ui-border)': appearance.border },
                isBright ? 'text-zinc-950' : 'text-zinc-50',
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
