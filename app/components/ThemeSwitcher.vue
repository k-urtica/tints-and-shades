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
    <div class="text-sm">{{ $t('Theme') }}</div>
    <ClientOnly>
      <USwitch
        v-model="isDark"
        checked-icon="i-lucide-moon"
        unchecked-icon="i-lucide-sun"
        class="flex-row-reverse gap-2"
      />
      <template #fallback>
        <USkeleton class="ml-auto h-5 w-40" />
      </template>
    </ClientOnly>
  </div>
</template>
