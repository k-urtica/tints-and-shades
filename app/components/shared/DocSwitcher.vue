<script setup lang="ts">
const { isDocVisible, toggleDoc } = useDocToggle();
</script>

<template>
  <UTooltip :text="isDocVisible ? $t('Hide documentation') : $t('Show documentation')" arrow>
    <UButton
      variant="outline"
      size="sm"
      :color="isDocVisible ? 'primary' : 'neutral'"
      :icon="isDocVisible ? 'i-lucide-book-open' : 'i-lucide-book'"
      :aria-label="isDocVisible ? $t('Hide documentation') : $t('Show documentation')"
      label="Docs"
      class="rounded-full"
      @click="toggleDoc"
    />
  </UTooltip>
</template>
