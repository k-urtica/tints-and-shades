<script setup lang="ts">
const isOpenModal = ref(false);
</script>

<template>
  <div>
    <div class="flex items-center justify-end gap-2 pb-3">
      <UModal
        v-model="isOpenModal"
        title="About"
        close-icon="i-lucide-x"
        :overlay="false"
      >
        <UButton variant="outline" color="neutral" size="sm" @click="isOpenModal = true"
          >About</UButton
        >
        <template #body>
          <div class="relative">
            <p class="text-sm">
              Tints and Shades Generator is a tool that helps you generate tints and
              shades from any color code. You can adjust the weight of the color and
              customize the appearance of the color cards.
            </p>
            <p class="pt-3 text-center text-sm">💚 Built with Nuxt3 and NuxtUI.</p>

            <h3 class="pt-6 pb-3 text-lg font-bold">Features</h3>
            <ul class="list-inside list-disc text-sm">
              <li>Generate tints and shades from any color code</li>
              <li>Adjust the weight of the color</li>
              <li>Customize the appearance of the color cards</li>
              <li>Copy the color code with a single click</li>
            </ul>

            <h3 class="pt-6 pb-3 text-lg font-bold">Credits</h3>
            <p class="text-sm">
              This project was created by
              <NuxtLink to="https://github.com/k-urtica" target="_blank" class="underline"
                >K</NuxtLink
              >
              and is open-source. You can find the source code on GitHub.
            </p>
          </div>
        </template>
      </UModal>

      <UButton
        to="https://github.com/k-urtica/tints-and-shades"
        target="_blank"
        variant="outline"
        leading-icon="i-lucide-github"
        color="neutral"
        size="sm"
        >This Project is OSS</UButton
      >
    </div>

    <ThemeSwitcher />
  </div>
</template>
