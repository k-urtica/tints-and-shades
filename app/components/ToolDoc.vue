<script setup lang="ts">
import '@/assets/markdown.css';

const { toggleDoc } = useDocToggle();
const { locale: currentLocale } = useI18n();

const { data: doc } = await useAsyncData(
  `docs-${currentLocale.value}`,
  () => queryCollection('docs').where('stem', '=', `docs/${currentLocale.value}`).first()
);
</script>

<template>
  <PanelContainer class="overflow-hidden">
    <div class="h-full overflow-y-auto p-5 lg:p-8">
      <div class="mb-4 flex justify-end">
        <UButton
          variant="ghost"
          icon="i-lucide-chevron-left"
          size="sm"
          class="rounded-lg"
          @click="toggleDoc"
        >
          Back to Tool
        </UButton>
      </div>

      <Motion v-bind="fade()">
        <ContentRenderer
          v-if="doc"
          :value="doc.meta"
          class="markdown-body"
          tag="section"
        />
      </Motion>
    </div>
  </PanelContainer>
</template>
