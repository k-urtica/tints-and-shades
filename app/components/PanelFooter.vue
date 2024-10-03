<script setup lang="ts">
const isOpenModal = ref(false);
</script>

<template>
  <div>
    <div class="flex items-center justify-end gap-1 pb-2">
      <UButton
        variant="ghost"
        color="gray"
        size="sm"
        leading-icon="i-ph-question"
        @click="isOpenModal = true"
        >About</UButton
      >

      <UModal v-model="isOpenModal" :overlay="false">
        <div class="relative px-8 py-10">
          <UButton
            variant="ghost"
            color="gray"
            size="lg"
            icon="i-ph-x-bold"
            class="absolute right-2 top-1"
            @click="isOpenModal = false"
          />
          <h2 class="pb-3 text-lg font-bold">About</h2>
          <p class="text-sm">
            Tints and Shades Generator is a tool that helps you generate tints and shades
            from any color code. You can adjust the weight of the color and customize the
            appearance of the color cards.
          </p>
          <p class="pt-3 text-center text-sm">💚 Built with Nuxt3 and NuxtUI.</p>

          <h2 class="pb-3 pt-6 text-lg font-bold">Features</h2>
          <ul class="list-inside list-disc text-sm">
            <li>Generate tints and shades from any color code</li>
            <li>Adjust the weight of the color</li>
            <li>Customize the appearance of the color cards</li>
            <li>Copy the color code with a single click</li>
          </ul>

          <h2 class="pb-3 pt-6 text-lg font-bold">Credits</h2>
          <p class="text-sm">
            This project was created by
            <NuxtLink to="https://github.com/k-urtica" target="_blank" class="underline"
              >K</NuxtLink
            >
            and is open-source. You can find the source code on GitHub.
          </p>
        </div>
      </UModal>

      <UButton
        to="https://github.com/k-urtica/tints-and-shades"
        target="_blank"
        variant="ghost"
        leading-icon="i-ph-github-logo"
        color="gray"
        size="sm"
        >This Project is OSS</UButton
      >
    </div>

    <ThemeSwitcher />
  </div>
</template>
