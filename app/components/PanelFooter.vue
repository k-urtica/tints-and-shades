<script setup lang="ts"></script>

<template>
  <div>
    <div class="flex items-center justify-end gap-2 pb-3">
      <AboutModal />

      <UButton
        to="https://github.com/k-urtica/tints-and-shades"
        target="_blank"
        variant="outline"
        leading-icon="i-lucide-github"
        trailing-icon="i-lucide-arrow-up-right"
        color="neutral"
        size="sm"
        >This Project is OSS</UButton
      >
    </div>

    <ThemeSwitcher />
  </div>
</template>
