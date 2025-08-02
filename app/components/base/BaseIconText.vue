<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

interface BaseIconTextProps {
  /**
   * The icon to display alongside the text.
   */
  icon?: string;
  /**
   * The HTML element to render as the root of the component.
   * @default 'span'
   */
  as?: keyof HTMLElementTagNameMap;
  class?: HTMLAttributes['class'];
}

withDefaults(defineProps<BaseIconTextProps>(), {
  as: 'span',
});
</script>

<template>
  <component :is="as" :class="cn('flex items-center gap-1', $props.class)">
    <UIcon v-if="icon" :name="icon" class="shrink-0" />
    <span><slot /></span>
  </component>
</template>
