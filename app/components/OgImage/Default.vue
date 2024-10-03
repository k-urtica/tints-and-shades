<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>

<template>
  <div class="bg-[#121212] p-10">
    <div
      class="flex h-full items-center justify-center rounded-3xl border border-zinc-700"
    >
      <div class="text-6xl font-black text-white">
        {{ title }}
      </div>
    </div>
  </div>
</template>
