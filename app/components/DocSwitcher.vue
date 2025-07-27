<script setup lang="ts">
const route = useRoute();

const isDocVisible = computed(() => route.query.doc === 'true');

const handleClick = () => {
  const query = { ...route.query };
  if (isDocVisible.value) {
    delete query.doc;
  } else {
    query.doc = 'true';
  }
  navigateTo({ query });
};
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
      @click="handleClick"
    />
  </UTooltip>
</template>
