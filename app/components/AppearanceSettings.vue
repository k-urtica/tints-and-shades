<script setup lang="ts">
export interface Appearance {
  isPadded: boolean;
  isOneLine: boolean;
  indicator: boolean;
  copyWithHash: boolean;
  border: boolean;
  showText: boolean;
}

const appearance = useState<Appearance>('appearance', () => ({
  isPadded: true,
  isOneLine: false,
  indicator: true,
  copyWithHash: true,
  border: true,
  showText: true,
}));
</script>

<template>
  <div class="flex flex-col gap-4">
    <Switch v-model="appearance.border" :label="$t('Card Border')" />

    <Switch v-model="appearance.isPadded" :label="$t('Card Padding')" />

    <Switch v-model="appearance.isOneLine" :label="$t('Single Column')" />

    <Switch
      v-model="appearance.indicator"
      :label="$t('Show Indicator')"
      :help="`💡 ${$t('Mark the entered color')}`"
    />

    <Switch v-model="appearance.showText" :label="$t('Show Card Text')" />

    <Switch v-model="appearance.copyWithHash" :label="$t('Copy with Hash')" />
  </div>
</template>
