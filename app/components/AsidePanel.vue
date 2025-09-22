<script setup lang="ts">
const currentYear = new Date().getFullYear();

const promoLinks = [
  {
    to: 'https://gradient-text-pro.web-toolbox.dev',
    src: '/images/logo-gradient-text-pro.webp',
    title: 'Gradient Text Pro'
  },
  {
    to: 'https://border-radius-pro.web-toolbox.dev',
    src: '/images/logo-border-radius-pro.webp',
    title: 'Border Radius Pro'
  }
] as const;
</script>

<template>
  <aside class="w-[260px] overflow-hidden">
    <PanelContainer
      class="flex h-full flex-col"
    >
      <section aria-label="Sponsored" class="flex h-full min-h-0 flex-1 flex-col gap-1 py-3">
        <span class="px-4 text-xs text-muted">Sponsored link</span>
        <div class="h-full overflow-y-auto px-4">
          <AdBanner />
        </div>
      </section>

      <div class="space-y-3 p-4">
        <ULink
          v-for="{ src, title, to } in promoLinks"
          :key="to"
          :to
          target="_blank"
          class="block rounded-xl bg-muted/40 p-3 ring-1 ring-default transition-colors hover:ring-primary"
        >
          <div class="flex items-center gap-2">
            <img
              :src
              width="20"
              height="20"
              alt=""
            >
            <div class="text-sm font-semibold">{{ title }}</div>
          </div>
        </ULink>

        <ULink
          to="https://web-toolbox.dev/en"
          target="_blank"
          class="group block rounded-xl bg-muted/40 p-4 ring-1 ring-default transition-colors hover:ring-primary"
        >
          <div class="flex items-center gap-2">
            <UAvatar
              icon="i-lucide-box"
              size="md"
              class="rounded-lg bg-primary/10 group-hover:bg-primary/20"
              :ui="{ icon: 'text-primary' }"
            />
            <div>
              <div class="text-sm font-semibold text-toned">Web ToolBox</div>
              <div class="mt-1 text-xs leading-snug text-pretty text-muted">
                {{ $t('All the web tools you need, in one place') }}
              </div>
            </div>
          </div>
          <div class="mt-3 rounded-lg bg-accented/50 px-4 py-1.5 text-center text-xs text-toned">
            Open Web ToolBox
          </div>
        </ULink>
      </div>
      <footer class="border-t px-4 py-3 text-center text-xs text-muted">
        © {{ currentYear }} Tints & Shades
      </footer>
    </PanelContainer>
  </aside>
</template>
