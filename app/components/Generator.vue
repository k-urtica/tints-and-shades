<script setup lang="ts">
import Values from 'values.js';

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
      color="error"
      title="Could not preview. Check configuration."
    />

    <template v-else>
      <h2 class="mt-4 text-sm font-bold">Preview (Click to copy👉)</h2>
      <div
        class="mt-2 grid transition-all"
        :class="[
          appearance.isPadded ? 'gap-2' : 'gap-0',
          appearance.isOneLine
            ? 'grid-cols-1 overflow-hidden rounded-lg'
            : 'sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5',
        ]"
      >
        <UTooltip
          v-for="(c, idx) in colors"
          :key="idx"
          :text="`Copy: ${c.hexString()}`"
          :content="{ side: 'top', align: 'end', sideOffset: -30 }"
        >
          <ColorCard
            :hex-color="c.hexString()"
            :weight="c.weight.toFixed()"
            :indicator="appearance.indicator && c.weight === 0"
            class="w-full"
            :class="[
              { 'ring-1 ring-(--ui-border)': appearance.border },
              c.getBrightness() >= 45 ? 'text-zinc-950' : 'text-zinc-50',
              { 'rounded-lg': appearance.isPadded },
            ]"
            @click="doCopy"
          />
        </UTooltip>
      </div>
    </template>
  </div>
</template>
