<template>
  <header class="sticky top-0 z-10 h-(--header-height) px-2 pt-1">
    <div class="flex h-full items-center rounded-xl border-2 border-default/70 bg-default px-4">
      <div class="flex items-center gap-2">
        <NuxtImg
          src="/favicon.svg"
          width="20"
          height="20"
          aria-hidden="true"
        />
        <h1 class="text-base leading-tight font-black tracking-tight lg:text-lg">
          Tints and Shades Generator
        </h1>
      </div>

      <div class="ms-auto flex shrink-0 items-center gap-2.5">
        <AboutModal />

        <UButton
          to="https://github.com/k-urtica/tints-and-shades"
          target="_blank"
          variant="outline"
          leading-icon="i-lucide-github"
          color="neutral"
          size="sm"
          aria-label="GitHub Repository"
          class="rounded-full"
        />
      </div>
    </div>
  </header>
</template>
