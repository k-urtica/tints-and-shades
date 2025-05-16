<template>
  <UModal
    :title="$t('About This Tool')"
    :description="
      $t(
        'A tool to create color variations by generating tints and shades from any base color'
      )
    "
    close-icon="i-lucide-x"
    :ui="{
      content: 'max-w-xl',
    }"
  >
    <UButton variant="outline" color="neutral" leading-icon="i-lucide-info" size="sm">
      About
    </UButton>

    <template #body>
      <div class="space-y-5">
        <p class="text-sm">
          {{
            $t(
              'Tints and Shades Generator is a tool designed to help you create tint and shade variations from any color. Easily adjust color intensity and customize how your color palette displays to suit your design needs.'
            )
          }}
        </p>

        <div class="text-center">
          <UBadge
            color="primary"
            variant="subtle"
            :label="`💚 ${$t('Built with Nuxt3 and NuxtUI')}`"
          />
        </div>

        <div>
          <h3 class="mb-2 text-lg font-bold">Features</h3>
          <ul class="list-inside list-disc space-y-1 text-sm">
            <li>{{ $t('Generate smooth tints and shades from any color code') }}</li>
            <li>{{ $t('Precisely adjust color weight to suit your design needs') }}</li>
            <li>{{ $t('Customize color card appearance and information display') }}</li>
            <li>{{ $t('Copy color codes in various formats with a single click') }}</li>
          </ul>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-bold">Credits</h3>
          <p class="text-sm">
            This project was developed by
            <ULink
              to="https://github.com/k-urtica"
              target="_blank"
              class="font-medium text-primary underline"
            >
              K
            </ULink>
            and is available as open-source software. View the complete source code on
            <ULink
              to="https://github.com/k-urtica/tints-and-shades"
              target="_blank"
              class="font-medium text-primary underline"
            >
              GitHub
            </ULink>.
          </p>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-bold">Related Tools</h3>
          <p class="text-sm">
            Check out
            <ULink
              to="https://web-toolbox.dev/"
              target="_blank"
              class="font-medium text-primary underline"
            >
              Web ToolBox
            </ULink>
            for more useful web development tools!😊
          </p>
        </div>
      </div>
    </template>
  </UModal>
</template>
