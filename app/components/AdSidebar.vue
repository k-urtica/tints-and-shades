<script setup lang="ts"></script>

<template>
  <aside class="sticky top-0 max-h-svh w-[260px] pt-3">
    <div class="flex h-full flex-col overflow-auto rounded-tl-2xl border bg-background">
      <div class="relative p-3">
        <span class="text-xs text-muted">Sponsored link</span>
        <div class="absolute flex flex-col gap-4 rounded-lg bg-surface p-1">
          <Ads />
          <Ads />
        </div>
      </div>

      <!-- <div class="mt-auto p-4">
        <div></div>
      </div> -->
    </div>
  </aside>
</template>
