import eslintConfigPrettier from 'eslint-config-prettier';

import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
    'vue/define-macros-order': [
      'warn',
      {
        order: [
          'defineOptions',
          'defineModel',
          'defineProps',
          'defineEmits',
          'defineSlots',
        ],
      },
    ],
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
  },
}).append({ rules: eslintConfigPrettier.rules });
