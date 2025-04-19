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
  <ClientOnly>
    <USwitch
      v-model="isDark"
      label="Toggle theme"
      checked-icon="i-lucide-moon"
      unchecked-icon="i-lucide-sun"
      class="flex-row-reverse gap-2"
    />
    <template #fallback>
      <USkeleton class="ml-auto h-5 w-40" />
    </template>
  </ClientOnly>
</template>
