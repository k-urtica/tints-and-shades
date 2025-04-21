<script setup lang="ts"></script>

<template>
  <aside
    class="mt-3 max-h-svh w-[260px] overflow-auto rounded-tl-2xl border bg-background"
  >
    <div class="flex h-full flex-col">
      <div class="p-3">
        <span class="text-xs text-muted">Sponsored link</span>
        <div class="flex flex-col gap-4 rounded-lg bg-surface p-1">
          <Ads />
          <Ads />
        </div>
      </div>
    </div>
  </aside>
</template>
