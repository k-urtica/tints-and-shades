<script setup lang="ts">
defineProps<{
  hexColor: string;
  weight: string;
  indicator?: boolean;
}>();

defineEmits<{
  (e: 'click', color: string): void;
}>();
</script>

<template>
  <a
    href="#"
    class="relative block px-4 py-5 text-sm"
    :style="{ background: hexColor }"
    @click.prevent="$emit('click', hexColor)"
  >
    <UIcon
      v-if="indicator"
      name="i-ph-circle-wavy-warning-duotone"
      class="absolute right-2 top-1 size-5 animate-pulse"
    />
    <div class="text-xs">{{ `${weight}%` }}</div>
    <div class="mt-1 text-base font-semibold">{{ hexColor }}</div>
  </a>
</template>
