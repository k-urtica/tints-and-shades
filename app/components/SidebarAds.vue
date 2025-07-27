<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <aside class="sticky top-(--header-height) h-full w-[260px] py-2.5">
    <PanelContainer
      class="flex h-full flex-col rounded-r-none"
    >
      <div class="flex-1 px-4 py-3">
        <span class="text-xs text-muted">Sponsored link</span>
        <div class="mt-1 flex flex-col gap-4">
          <Ads />
        </div>
      </div>

      <div class="p-4">
        <ULink
          to="https://web-toolbox.dev/en"
          target="_blank"
          class="group block rounded-lg bg-muted/60 p-4 shadow-sm ring-1 ring-muted/40 transition-colors hover:ring-1 hover:ring-primary"
        >
          <div class="flex items-center gap-2">
            <span
              class="grid content-center rounded-lg bg-primary/10 p-2 group-hover:bg-primary/20"
            >
              <UIcon name="i-lucide-box" class="size-5 text-primary" />
            </span>
            <div>
              <div class="text-sm font-bold">Web ToolBox</div>
              <div class="mt-1 text-xs leading-snug text-balance text-muted">
                {{ $t('All the web tools you need, in one place') }}
              </div>
            </div>
          </div>
        </ULink>

        <div class="mt-5 border-t pt-2 text-center text-xs text-muted">
          © {{ currentYear }} Tints & Shades
        </div>
      </div>
    </PanelContainer>
  </aside>
</template>
