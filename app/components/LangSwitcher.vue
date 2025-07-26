<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui';

const { locales, localeProperties } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const activeLocale = ref(localeProperties.value.name);

const items = computed(() =>
  locales.value.map<DropdownMenuItem>((locale) => ({
    label: locale.name,
    to: switchLocalePath(locale.code),
  }))
);
</script>

<template>
  <div class="flex items-center justify-between gap-2">
    <div class="flex items-center gap-1 text-sm font-semibold">
      <UIcon name="i-lucide-globe" class="size-4" />
      {{ $t('Language') }}
    </div>

    <UDropdownMenu :items="items">
      <UButton
        variant="outline"
        trailing-icon="i-lucide-chevron-down"
        block
        class="w-30"
      >
        {{ activeLocale }}
      </UButton>
      <template #item-trailing="{ item }">
        <UIcon v-if="item.label === activeLocale" name="i-lucide-check" />
      </template>
    </UDropdownMenu>
  </div>
</template>
