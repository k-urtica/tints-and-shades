import eslintConfigPrettier from 'eslint-config-prettier';
import * as pluginImportX from 'eslint-plugin-import-x';
import unusedImports from 'eslint-plugin-unused-imports';

// eslint-disable-next-line import-x/no-named-as-default
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/define-emits-declaration': ['error', 'type-literal'],
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
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
  },
})
  .append(pluginImportX.flatConfigs.recommended, {
    name: 'eslint-plugin-import-x-custom',
    rules: {
      'import-x/newline-after-import': ['error', { count: 1 }],
      'import-x/no-named-default': 'error',
      'import-x/no-self-import': 'error',
      'import-x/no-unresolved': 'off',
      'import-x/order': ['error', { alphabetize: { order: 'asc' } }],
    },
  })
  .append({
    name: 'eslint-plugin-unused-imports',
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  })
  .append({
    name: 'eslint-config-prettier',
    rules: eslintConfigPrettier.rules,
  });
