<script setup lang="ts">
const currentYear = new Date().getFullYear();

const container = useTemplateRef('container');

useMutationObserver(
  container,
  () => {
    // Remove height: auto !important that AdSense automatically sets,
    // to prioritize the height settings specified in our component's CSS
    if (container.value?.style.height) {
      container.value.style.height = '';
    }
  },
  {
    attributes: true,
    attributeFilter: ['style'],
  }
);
</script>

<template>
  <aside class="sticky top-0 max-h-svh w-[260px] pt-3">
    <div
      ref="container"
      class="flex h-full flex-col overflow-auto rounded-tl-2xl border bg-background"
    >
      <div class="py-3">
        <span class="px-3 text-xs text-muted">Sponsored link</span>
        <div class="mt-1 flex flex-col gap-4">
          <Ads />
          <Ads />
        </div>
      </div>

      <div class="mt-auto p-4">
        <ULink
          to="https://web-toolbox.dev/en"
          target="_blank"
          class="group block rounded-lg border bg-primary/10 px-3 py-4 transition-colors hover:border-primary"
        >
          <div class="flex items-center gap-3">
            <span
              class="grid content-center rounded-lg bg-primary/10 p-2 transition-colors group-hover:bg-primary/20"
            >
              <UIcon name="i-lucide-box" class="size-5 text-primary" />
            </span>
            <div>
              <div class="text-sm font-semibold transition-colors">Web ToolBox</div>
              <div class="mt-1 text-xs text-muted">
                All the web tools you need,in one place
              </div>
            </div>
          </div>
        </ULink>

        <div class="mt-5 border-t pt-2 text-center text-xs text-muted">
          © {{ currentYear }} Tints & Shades
        </div>
      </div>
    </div>
  </aside>
</template>
