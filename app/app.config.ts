export default defineAppConfig({
  ui: {
    primary: 'emerald',
    gray: 'zinc',

    notifications: {
      position: 'top-0 bottom-auto',
    },

    input: {
      form: 'ring-opacity-85 dark:ring-opacity-80',
      rounded: 'rounded-lg',
    },
    textarea: {
      form: 'ring-opacity-85 dark:ring-opacity-80',
      rounded: 'rounded-lg',
    },
    button: {
      default: {
        loadingIcon: 'i-ph-arrows-clockwise-bold',
      },
      gap: {
        md: 'gap-x-1.5',
        lg: 'gap-x-2',
      },
      padding: {
        sm: 'px-3 py-1.5',
        md: 'px-4 py-2',
        lg: 'px-5 py-2.5',
        xl: 'px-6 py-2.5',
      },
      rounded: 'rounded-lg',
    },
    checkbox: {
      inner: 'ms-2',
    },
    select: {
      base: 'ring-opacity-85 dark:ring-opacity-80',
    },
    selectMenu: {
      default: {
        selectedIcon: 'i-ph-check-bold',
      },
      rounded: 'rounded-lg',
    },
  },
});
