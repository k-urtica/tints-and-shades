<script setup lang="ts">
const { appearance } = storeToRefs(useAppStore());
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
