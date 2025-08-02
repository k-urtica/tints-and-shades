<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <aside class="w-[260px] overflow-hidden">
    <PanelContainer
      class="flex h-full flex-col"
    >
      <div class="flex h-full min-h-0 flex-1 flex-col gap-1 py-3">
        <span class="px-4 text-xs text-muted">Sponsored link</span>
        <div class="h-full overflow-y-auto px-4">
          <AdBanner />
        </div>
      </div>

      <div class="p-4">
        <ULink
          to="https://web-toolbox.dev/en"
          target="_blank"
          class="group block rounded-xl bg-muted/40 p-4 shadow-sm ring-1 ring-muted/50 transition-colors hover:ring-1 hover:ring-primary"
        >
          <div class="flex items-center gap-2">
            <span
              class="grid content-center rounded-lg bg-primary/10 p-2 group-hover:bg-primary/20"
            >
              <UIcon name="i-lucide-box" class="size-5 text-primary" />
            </span>
            <div>
              <div class="text-sm font-bold text-toned">Web ToolBox</div>
              <div class="mt-1 text-xs leading-snug text-pretty text-muted">
                {{ $t('All the web tools you need, in one place') }}
              </div>
            </div>
          </div>
          <div class="mt-3 rounded-lg bg-accented/50 px-4 py-1.5 text-center text-xs text-toned">
            Open Web ToolBox
          </div>
        </ULink>

        <div class="mt-5 border-t pt-2 text-center text-xs text-muted">
          © {{ currentYear }} Tints & Shades
        </div>
      </div>
    </PanelContainer>
  </aside>
</template>
