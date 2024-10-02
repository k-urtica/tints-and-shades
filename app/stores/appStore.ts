export const useAppStore = defineStore('tints-and-shades-app', () => {
  const color = ref('#ff9ea5');

  const weight = ref(8);

  const appearance = ref<{
    isPadded: boolean;
    isOneLine: boolean;
    indicator: boolean;
    copyWithHash: boolean;
    border: boolean;
  }>({
    isPadded: true,
    isOneLine: false,
    indicator: true,
    copyWithHash: true,
    border: false,
  });

  return {
    color,
    weight,
    appearance,
  };
});
