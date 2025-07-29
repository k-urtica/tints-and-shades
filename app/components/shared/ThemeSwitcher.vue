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
    <div class="flex items-center gap-1 text-sm font-semibold">
      <UIcon name="i-lucide-sun-moon" class="size-4" />
      {{ $t('Theme') }}
    </div>

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
