<script setup lang="ts">
const currentYear = new Date().getFullYear();

const promoLinks = [
  {
    to: 'https://picdiff.dev',
    src: '/images/logo-picdiff.webp',
    title: 'PicDiff',
    description: 'Compare Images with Precision'
  },
  {
    to: 'https://web-toolbox.dev/en',
    src: '/images/logo-web-toolbox.webp',
    title: 'Web ToolBox',
    description: 'All the web tools you need, in one place'
  }
] as const;
</script>

<template>
  <aside class="w-[260px] overflow-hidden">
    <PanelContainer
      class="flex h-full flex-col"
    >
      <section aria-label="Sponsored" class="flex h-full min-h-0 flex-1 flex-col gap-1 py-3">
        <span class="px-4 text-xs text-dimmed">Sponsored link</span>
        <div class="h-full overflow-y-auto px-4">
          <AdBanner />
        </div>
      </section>

      <div class="space-y-3 p-4">
        <ULink
          v-for="promo in promoLinks"
          :key="promo.to"
          :to="promo.to"
          target="_blank"
          class="block rounded-lg bg-elevated/80 p-3 shadow-sm ring-1 ring-default transition-colors hover:ring-primary"
        >
          <div class="flex items-start gap-2">
            <UAvatar
              :src="promo.src"
              size="sm"
              alt=""
              class="rounded-lg"
            />
            <div>
              <div class="text-sm font-medium text-toned">{{ promo.title }}</div>
              <div class="text-xs text-muted">{{ promo.description }}</div>
            </div>
          </div>
        </ULink>
      </div>
      <footer class="border-t px-4 py-2.5 text-center text-xs text-dimmed">
        © {{ currentYear }} Tints & Shades
      </footer>
    </PanelContainer>
  </aside>
</template>
