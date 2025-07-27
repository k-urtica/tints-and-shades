<script setup lang="ts">
import '@/assets/markdown.css';

const { locale: currentLocale } = useI18n();

const { data: doc } = await useAsyncData(
  `docs-${currentLocale.value}`,
  () => queryCollection('docs').where('stem', '=', `docs/${currentLocale.value}`).first()
);
</script>

<template>
  <PanelContainer class="overflow-auto p-5 md:p-8">
    <ContentRenderer
      v-if="doc"
      :value="doc.meta"
      class="markdown-body"
      tag="section"
    />
  </PanelContainer>
</template>
