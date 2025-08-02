<script setup lang="ts">
import type { TabsProps } from '@nuxt/ui';

export interface BaseTabsSelectorProps {
  label?: string;
  size?: TabsProps['size'];
  items: TabsProps['items'];
}

const model = defineModel<TabsProps['modelValue']>();

withDefaults(defineProps<BaseTabsSelectorProps>(), {
  size: 'sm',
});
</script>

<template>
  <UFormField
    :label="label"
  >
    <div class="rounded-lg p-1 ring-1 ring-muted/70">
      <UTabs
        v-model="model"
        :items="items"
        :size="size"
        :content="false"
      />
    </div>
  </UFormField>
</template>
