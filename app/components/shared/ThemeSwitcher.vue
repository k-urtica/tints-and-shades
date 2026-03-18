<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  },
});
</script>

<template>
  <UFormField orientation="horizontal">
    <template #label>
      <BaseIconText icon="i-lucide-sun-moon" class="text-sm font-semibold">
        {{ $t('Theme') }}
      </BaseIconText>
    </template>

    <ClientOnly>
      <USwitch
        v-model="isDark"
        checked-icon="i-lucide-moon"
        unchecked-icon="i-lucide-sun"
        aria-label="Toggle dark mode"
      />
      <template #fallback>
        <USkeleton class="ml-auto h-5 w-10" />
      </template>
    </ClientOnly>
  </UFormField>
</template>
