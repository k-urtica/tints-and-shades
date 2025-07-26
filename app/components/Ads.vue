<script setup lang="ts"></script>

<template>
  <ScriptGoogleAdsense
    data-ad-client="ca-pub-6155745382628091"
    data-ad-slot="3784163880"
    :data-full-width-responsive="false"
    data-ad-format="autorelaxed"
    class="mx-auto max-w-full"
  >
    <template #error>
      <p class="text-sm text-muted">
        {{
          `🙏 ${$t('Please consider disabling your ad blocker to support the development of this site.')}`
        }}
      </p>
    </template>
  </ScriptGoogleAdsense>
</template>
