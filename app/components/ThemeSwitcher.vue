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

const icon = computed(() =>
  isDark.value ? 'i-ph-moon-stars-duotone' : 'i-ph-sun-duotone'
);
</script>

<template>
  <ClientOnly>
    <UButton
      :leading-icon="icon"
      color="neutral"
      variant="subtle"
      aria-label="Toggle theme"
      block
      @click="isDark = !isDark"
    >
      Toggle theme
    </UButton>
    <template #fallback>
      <USkeleton class="h-8" />
    </template>
  </ClientOnly>
</template>
