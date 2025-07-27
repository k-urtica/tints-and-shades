import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      type: 'data',
      source: 'docs/**/*.md',
      schema: z.object({}),
    }),
  },
});
