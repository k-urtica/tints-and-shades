<script setup lang="ts">
defineProps<{
  hexColor: string;
  weight: string;
  indicator?: boolean;
}>();

defineEmits<{
  click: [color: string];
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
      name="i-lucide-badge-alert"
      aria-label="Base color indicator"
      class="absolute top-1 right-2 size-5 animate-pulse"
    />

    <div class="text-xs tabular-nums">{{ `${weight}%` }}</div>
    <div class="mt-1 font-mono text-base font-semibold">
      {{ hexColor.toLocaleUpperCase() }}
    </div>
  </a>
</template>
