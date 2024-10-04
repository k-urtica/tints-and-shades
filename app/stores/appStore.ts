type Appearance = {
  isPadded: boolean;
  isOneLine: boolean;
  indicator: boolean;
  copyWithHash: boolean;
  border: boolean;
};

export const useAppStore = defineStore('tints-and-shades-app', () => {
  const color = ref('#41339c');

  const weight = ref(6);

  const appearance = ref<Appearance>({
    isPadded: true,
    isOneLine: false,
    indicator: true,
    copyWithHash: true,
    border: true,
  });

  return {
    color,
    weight,
    appearance,
  };
});
