<template>
  <header class="sticky top-0 z-10 h-(--header-height) px-2">
    <PanelContainer class="flex h-full items-center rounded-t-none border-t-0 px-4">
      <NuxtLinkLocale to="/" class="flex items-center gap-2">
        <NuxtImg
          src="/favicon.svg"
          width="20"
          height="20"
          aria-hidden="true"
        />
        <h1 class="text-base leading-tight font-black tracking-tight lg:text-lg">
          Tints and Shades Generator
        </h1>
      </NuxtLinkLocale>

      <nav aria-label="Header Navigation" class="ms-auto flex shrink-0 items-center gap-2.5">
        <DocSwitcher />

        <AboutModal />

        <GitHubButton />
      </nav>
    </PanelContainer>
  </header>
</template>
