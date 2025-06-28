// @ts-check
import antfu from '@antfu/eslint-config';
import eslintPluginReadableTailwind from 'eslint-plugin-readable-tailwind';

import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  antfu({
    formatters: {
      css: true,
      markdown: 'prettier'
    },
    stylistic: {
      semi: true,
      overrides: {
        'style/arrow-parens': ['error', 'always'],
        'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
        'style/operator-linebreak': ['error', 'after', { overrides: { '?': 'ignore', ':': 'ignore' } }],
      },
    },
    vue: {
      overrides: {
        'vue/define-macros-order': ['error', {
          order: [
            'defineOptions',
            'defineModel',
            'defineProps',
            'defineEmits',
            'defineSlots',
          ],
        }],
      },
    },
    rules: {
      'antfu/if-newline': 'off',
      'antfu/top-level-function': 'off',
      'style/comma-dangle': 'off',
      'vue/comma-dangle': 'off',
      'vue/singleline-html-element-content-newline': 'off',
    },
  }),
)
  .append({
    name: 'eslint-plugin-readable-tailwind',
    settings: {
      'readable-tailwind': {
        entryPoint: 'app/assets/main.css',
      },
    },
    plugins: {
      'readable-tailwind': eslintPluginReadableTailwind,
    },
    rules: {
      'readable-tailwind/multiline': 'off',
      'readable-tailwind/no-duplicate-classes': 'error',
      'readable-tailwind/no-unnecessary-whitespace': 'error',
      'readable-tailwind/sort-classes': 'error',
    },
  });
