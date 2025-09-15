<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui';
import type { Appearance } from '@/components/AppearanceSettings.vue';
import type { ColorType, GeneratedColor } from '@/composables/useColor';

type TabValue = 'all' | 'tints' | 'shades' | 'tailwind';

const { color, weight, format } = useColorQuery();
const appearance = useState<Appearance>('appearance');

const { copy, copied } = useClipboard({ legacy: true });
const toast = useToast();
const { generateColors, formatHexColor } = useColor();
const { generateTailwindColors } = useTwColor();

const tabItems = [
  { label: 'All', value: 'all' },
  { label: 'Tints', value: 'tints' },
  { label: 'Shades', value: 'shades' },
  { label: '✨Tailwind', value: 'tailwind' },
] as const satisfies TabsItem[];

const activeTab = ref<TabValue>(tabItems[0].value);

const colors = computed<GeneratedColor[]>(() =>
  generateColors(color.value, weight.value, format.value)
);

const tailwindColors = computed<GeneratedColor[]>(() =>
  generateTailwindColors(color.value, weight.value)
);

const filteredColorItems = computed<GeneratedColor[]>(() => {
  if (activeTab.value === 'tailwind') return tailwindColors.value;
  if (activeTab.value === 'all') return colors.value;

  const isActiveType = (type: ColorType) =>
    type === 'base' || type === (activeTab.value === 'tints' ? 'tint' : 'shade');

  return colors.value.filter(({ type }) => isActiveType(type));
});

watch(activeTab, (v) => {
  appearance.value.isOneLine = v === 'tailwind';
});

const doCopy = async (color: string) => {
  const _color = format.value === 'hex' ? formatHexColor(color, appearance.value.copyWithHash) : color;
  await copy(_color);

  if (copied.value) {
    toast.add({ title: `${_color} ${$t('copied to clipboard')}`, color: 'success', icon: 'i-lucide-clipboard-copy' });
  }
};
</script>

<template>
  <PanelContainer class="flex h-full flex-1 flex-col overflow-hidden">
    <header class="flex flex-wrap items-center gap-2 px-4 pt-4 pb-2">
      <h2 class="font-bold">{{ $t('Preview') }}</h2>
      <UBadge variant="subtle" color="primary" size="sm">{{ $t('Click to Copy') }}</UBadge>

      <nav class="ml-auto w-full md:w-96">
        <BaseTabsSelector
          v-model="activeTab"
          :items="tabItems"
        />
      </nav>
    </header>

    <section aria-label="Generated color palette" class="overflow-y-auto p-4">
      <div
        class="grid transition-[gap,padding]"
        :class="[
          appearance.isPadded ? 'gap-2' : 'gap-0',
          appearance.isOneLine
            ? 'grid-cols-1 overflow-hidden rounded-lg'
            : 'sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5',
        ]"
      >
        <ClientOnly>
          <ColorCard
            v-for="({ isBright, ...colorItem }, idx) in filteredColorItems"
            :key="idx"
            :color-item="{
              ...colorItem,
              indicator: appearance.indicator && colorItem.type === 'base',
            }"
            :is-bright
            :has-border="appearance.border"
            :show-text="appearance.showText"
            :class="{ 'rounded-xl': appearance.isPadded }"
            class="w-full"
            @click="doCopy"
          />

          <template #fallback>
            <USkeleton
              v-for="n in 12"
              :key="n"
              class="h-20 w-full rounded-xl"
            />
          </template>
        </ClientOnly>
      </div>
    </section>
  </PanelContainer>
</template>
