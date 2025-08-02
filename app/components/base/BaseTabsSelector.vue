<script setup lang="ts">
import type { TabsProps } from '@nuxt/ui';
import type { HTMLAttributes } from 'vue';

export interface BaseTabsSelectorProps {
  label?: string;
  items: TabsProps['items'];
  defaultValue?: TabsProps['defaultValue'];
  class?: HTMLAttributes['class'];
}

defineOptions({
  inheritAttrs: false,
});

const model = defineModel<TabsProps['modelValue']>();
const props = defineProps<BaseTabsSelectorProps>();

const tabsProps = reactiveOmit(props, ['label', 'class']);
</script>

<template>
  <UFormField
    :label="label"
    :class="props.class"
  >
    <div class="rounded-lg p-1 ring-1 ring-muted/70">
      <UTabs
        v-model="model"
        v-bind="{ ...tabsProps, ...$attrs }"
        size="xs"
        :content="false"
      />
    </div>
  </UFormField>
</template>
