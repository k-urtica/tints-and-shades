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
  <div class="flex items-center justify-between gap-2">
    <BaseIconText icon="i-lucide-sun-moon" class="text-sm font-semibold">
      {{ $t('Theme') }}
    </BaseIconText>

    <ClientOnly>
      <USwitch
        v-model="isDark"
        checked-icon="i-lucide-moon"
        unchecked-icon="i-lucide-sun"
      />
      <template #fallback>
        <USkeleton class="ml-auto h-5 w-40" />
      </template>
    </ClientOnly>
  </div>
</template>
