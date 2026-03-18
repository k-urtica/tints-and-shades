<script setup lang="ts">
import type { SelectItem } from '@nuxt/ui';

const { locales, localeProperties } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const activeLocale = ref(localeProperties.value.name);

const items = computed(() =>
  locales.value.map<SelectItem>((locale) => ({
    label: locale.name,
    value: locale.name,
    onSelect: async () => {
      await navigateTo(switchLocalePath(locale.code));
    },
  }))
);
</script>

<template>
  <UFormField orientation="horizontal">
    <template #label>
      <BaseIconText icon="i-lucide-globe" class="text-sm font-medium">
        {{ $t('Language') }}
      </BaseIconText>
    </template>

    <USelect
      v-model="activeLocale"
      :items="items"
      block
      size="sm"
      class="w-28"
    />
  </UFormField>
</template>
