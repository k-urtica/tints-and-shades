<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>

<template>
  <div
    class="bg-[#121212] p-10"
    :style="{
      backgroundImage: `url('/ogBg.png')`,
    }"
  >
    <div
      class="flex h-full items-center justify-center rounded-3xl border border-zinc-700"
    >
      <div class="text-7xl font-black text-amber-400">
        {{ title }}
      </div>
    </div>
  </div>
</template>
