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
    <BaseIconText icon="i-lucide-globe" class="text-sm font-semibold">
      {{ $t('Language') }}
    </BaseIconText>

    <UDropdownMenu :items="items">
      <UButton
        variant="outline"
        trailing-icon="i-lucide-chevron-down"
        block
        size="sm"
        class="w-28"
      >
        {{ activeLocale }}
      </UButton>
      <template #item-trailing="{ item }">
        <UIcon v-if="item.label === activeLocale" name="i-lucide-check" />
      </template>
    </UDropdownMenu>
  </div>
</template>
